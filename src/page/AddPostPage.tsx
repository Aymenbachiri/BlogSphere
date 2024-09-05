import AddPostForm from "@/components/forms/AddPostForm";
import ProtectedRoute from "@/lib/helpers/ProtectedRoute";

export default function AddPostPage() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen text-gray-800 dark:text-gray-200">
        <div className="container mx-auto px-4 py-36">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Share Your Story with the World
          </h1>
          <p className="text-lg mb-6 text-center">
            Create a new blog post and let your voice be heard. Your insights
            could inspire, inform, or entertain readers everywhere.
          </p>
          <AddPostForm />
        </div>
      </main>
    </ProtectedRoute>
  );
}
