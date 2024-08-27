import Story from "./Story";

const StoriesBar = () => {
  return (
    <div className="mt-[24px] mb-[32px] w-full flex gap-3 px-2">
      <Story />
      <Story />
      <Story />
    </div>
  );
};

export default StoriesBar;
