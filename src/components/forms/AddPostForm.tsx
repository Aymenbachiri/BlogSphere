"use client";

import { useAddPost } from "@/lib/hooks/useAddPost";
import Input from "../reusable-components/Input";
import AddPostBtn from "../buttons/AddPostBtn";
import TextArea from "../reusable-components/TextArea";

export default function AddPostForm() {
  const { register, handleSubmit, errors, loading } = useAddPost();

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-0 mt-8 max-w-md space-y-4 px-4 shadow-lg rounded-md py-[30px] shadow-black dark:shadow-white"
    >
      <Input
        label="Post Title"
        type="text"
        placeholder="Enter Post Title"
        registration={register("title")}
        error={errors.title}
      />
      <TextArea
        label="Post Description"
        placeholder="Enter Post Description"
        registration={register("description")}
        error={errors.description}
      />
      <Input
        label="Image url"
        type="text"
        placeholder="Example: www.unsplash.com/photos/1352"
        registration={register("imageurl")}
        error={errors.imageurl}
      />
      <AddPostBtn loading={loading} />
    </form>
  );
}
