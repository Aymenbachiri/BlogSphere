import { connectToDB } from "@/lib/database/database";
import Post from "@/lib/database/models/Post";
import { postSchema } from "@/lib/schema/postSchema";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

export async function GET(req: NextRequest) {
  try {
    await connectToDB();

    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch all posts:", error);
    return new NextResponse("Failed to fetch all posts", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsedBody = postSchema.safeParse(body);

    if (!parsedBody.success) {
      return new NextResponse(
        JSON.stringify({
          errors: parsedBody.error.issues.map((issue) => ({
            field: issue.path[0],
            message: issue.message,
          })),
        }),
        { status: 400 }
      );
    }

    const { creator, title, description, category, imageurl } = parsedBody.data;

    await connectToDB();

    const newPost = new Post({
      title,
      description,
      category,
      imageurl,
      creator,
    });

    await newPost.save();

    return new Response("Post has been created", { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Input validation error:", error.issues);
      return new NextResponse(
        JSON.stringify({ error: error.issues[0].message }),
        { status: 400 }
      );
    } else {
      console.error("Error during Post creation:", error);
      return new NextResponse(
        JSON.stringify({ error: "Failed to create Post" }),
        { status: 500 }
      );
    }
  }
}
