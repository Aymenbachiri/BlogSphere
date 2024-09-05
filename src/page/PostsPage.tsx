import PostCard from "@/components/posts/PostCard";

export default function PostsPage() {
  return (
    <main className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <PostCard />
      <PostCard />
      <PostCard />
    </main>
  );
}
