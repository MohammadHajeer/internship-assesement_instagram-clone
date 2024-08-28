import Post from "./Post";
import StoriesBar from "./StoriesBar";

const Feed = () => {
  return (
    <div className="w-[630px] max-md:w-full max-md:pt-[60px] max-md:pb-[61px] min-h-screen">
      <StoriesBar />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
