"use client";

import MyLink from "@/components/reusable-components/MyLink";
import { useAuth } from "@clerk/nextjs";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (!userId) {
    return (
      <main className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Sign In Required</h1>
          <p className="mt-4 text-gray-500">
            You need to sign in to access this page.
          </p>
          <MyLink className="underline text-blue-500" href="/sign-in">
            Sign In
          </MyLink>
        </section>
      </main>
    );
  }

  return <>{children}</>;
}
