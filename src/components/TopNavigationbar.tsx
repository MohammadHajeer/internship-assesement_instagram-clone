import { FaRegHeart } from "react-icons/fa6";

const TopNavigationbar = () => {
  return (
    <div className="w-full h-[60px] fixed top-0 left-0 right-0 bg-white md:hidden flex items-center justify-end px-4 border border-b-gray-200 flex-wrap">
      <h1 className="font-bold text-2xl flex items-center absolute top-1/2 -translate-y-1/2 left-4 -z-10">Instagram</h1>
      <div className="flex items-center gap-4">
        <input type="text" placeholder="search" className="bg-gray-200 px-2 py-1.5 rounded-md" />
        <FaRegHeart className="text-2xl" />
      </div>
    </div>
  );
};

export default TopNavigationbar;
