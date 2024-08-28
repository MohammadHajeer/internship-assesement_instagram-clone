import Story from "./Story";

const StoriesBar = () => {
  return (
    <div className="mt-[24px] max-xs:mt-[12px] mb-[12px] xs:mb-[32px] w-full flex gap-3 px-2 max-xs:border-[1px] border-transparent max-xs:border-b-gray-200">
      <Story />
      <Story />
      <Story />
    </div>
  );
};

export default StoriesBar;
