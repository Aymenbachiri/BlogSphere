import { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    creator: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageurl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Post = models.Post || model("Post", PostSchema);
export default Post;
