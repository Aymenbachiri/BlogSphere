import AddPostPage from "@/page/AddPostPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BlogSphere - Add New Post",
  description:
    "Create and publish your latest blog post on BlogSphere. Share your insights and stories with the world.",
  openGraph: {
    title: "BlogSphere - Add New Post",
    description:
      "Publish your latest blog post on BlogSphere and share your thoughts with a broad audience.",
    url: "https://www.blogsphere.com/add-post",
    type: "website",
    images: [
      {
        url: "https://www.blogsphere.com/assets/images/blogsphere-add-post.png",
        width: 1200,
        height: 630,
        alt: "BlogSphere logo and post creation page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlogSphere - Add New Post",
    description:
      "Craft and publish your latest blog post on BlogSphere. Reach readers worldwide with your content.",
    images: [
      "https://www.blogsphere.com/assets/images/blogsphere-add-post.png",
    ],
  },
};

export default function AddPost() {
  return <AddPostPage />;
}
