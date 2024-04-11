import { useParams } from "@remix-run/react";
import { BlogPost, dummyBlogs } from "./tempBlogs";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";

export default function BlogId() {
  const { id } = useParams<{ id: string }>(); // Specify the type of `id` here
  const blogPost = dummyBlogs.find((blog) => blog.id === id);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <TransitionFull>
      <h1>{blogPost.title}</h1>
    </TransitionFull>
  );
}
