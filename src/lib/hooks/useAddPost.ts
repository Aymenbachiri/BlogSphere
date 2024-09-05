import { useSession } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostFormData, postSchema } from "../schema/postSchema";

export function useAddPost() {
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  const addPost = useCallback(async (data: PostFormData): Promise<void> => {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Failed to add post");
    }
  }, []);

  const onSubmit = useCallback(
    async (data: PostFormData) => {
      console.log("Form submitted with data:", data);
      if (session) {
        data.creator = session.session?.user.fullName as string;
      } else {
        console.log("No session available");
        toast.error("You must be logged in to submit a post");
        return;
      }

      setLoading(true);
      try {
        const response = await fetch("/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to add post");
        }

        toast.success("Post added successfully!");
        reset();
        router.push("/dashboard");
      } catch (error) {
        console.error("Post addition error:", error);
        toast.error(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred."
        );
      } finally {
        setLoading(false);
      }
    },
    [addPost, reset, router, session]
  );

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
  };
}
