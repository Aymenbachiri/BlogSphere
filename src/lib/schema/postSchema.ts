import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  category: z.enum(["men", "women", "electronics", "jewelery"]),
  imageurl: z.string().url({ message: "Please enter a valid URL" }),
  creator: z.string(),
});

export type PostFormData = z.infer<typeof postSchema>;
