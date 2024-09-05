import MySuspense from "@/components/reusable-components/MySuspense";
import PostsPage from "@/page/PostsPage";
import type { Metadata } from "next";
import blogImg from "/public/assets/images/bloggin.jpg";
import MyImage from "@/components/reusable-components/MyImage";

export const metadata: Metadata = {
  title: "BlogSphere - Posts",
  description:
    "Explore the latest posts and articles on BlogSphere, your go-to platform for insightful blogs across various topics.",
  openGraph: {
    title: "BlogSphere - Posts",
    description:
      "Discover and read the latest blogs on BlogSphere. Stay informed with insightful articles across different categories.",
    url: "https://www.blogsphere.com/posts",
    type: "website",
    images: [
      {
        url: "https://www.blogsphere.com/assets/images/blogsphere-og-image.png",
        width: 1200,
        height: 630,
        alt: "BlogSphere logo and featured posts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlogSphere - Posts",
    description:
      "Check out the latest posts on BlogSphere. Dive into diverse topics and stay updated with quality content.",
    images: [
      "https://www.blogsphere.com/assets/images/blogsphere-og-image.png",
    ],
  },
};

export default function Posts() {
  return (
    <main className="container my-10 mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 bg-[#FFFDFA] dark:bg-[#171717]">
      <section className="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
        <span className="mb-3 text-gray-400 dark:text-gray-500 badge">
          Pre Beta
        </span>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-800 dark:text-gray-100 md:text-4xl lg:text-5xl">
          Explore Our Latest Posts
        </h1>
        <p className="pr-0 mb-4 text-sm text-gray-600 dark:text-gray-300 tracking-relaxed lg:pr-16">
          Stay up-to-date with the newest insights and stories from our talented
          bloggers across various topics.
        </p>
      </section>
      <section className="flex justify-center">
        <MyImage
          src={blogImg}
          alt="blog"
          width={900}
          height={600}
          sizes="(min-width: 1540px) 768px, (min-width: 1280px) 640px, (min-width: 1040px) 512px, (min-width: 780px) 384px, (min-width: 680px) 640px, calc(94.44vw + 17px)"
          placeholder="blur"
          className="rounded-md shadow-lg"
        />
      </section>
      <MySuspense>
        <PostsPage />
      </MySuspense>
    </main>
  );
}
