import { useParams } from "@remix-run/react";
import { BlogPost, dummyBlogs } from "./tempBlogs";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import BlogItemComponent from "../components/blogItemComponent";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import FlexFull from "~/components/buildingBlocks/flexFull";
import { shineyGradient } from "../components/styleVariables";

export default function BlogId() {
  const { id } = useParams<{ id: string }>(); // Specify the type of `id` here
  const blogPost = dummyBlogs.find((blog) => blog.id === id);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <FlexFull className="relative">
      {" "}
      <TransitionFull
        className="absolute top-0 left-0"
        style={{ height: "94svh" }}
      >
        <FlexFull className=" md:px-[1vh] xl:px-[2vw] xxl:px-[5vw] md:items-center">
          <FlexFull className={`${shineyGradient} shadowBroadLooser p-[0.5vh]`}>
            <BlogItemComponent
              blogPost={blogPost as unknown as BlogPost as any}
            />
          </FlexFull>
        </FlexFull>
      </TransitionFull>
    </FlexFull>
  );
}
