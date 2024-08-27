import { FaThreads } from "react-icons/fa6";
import { leftSidebarItems } from "../../constants";
import MenuItem from "../shared/MenuItem";
import { LiaBarsSolid } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";

const LeftSidebar = () => {
  return (
    <div className="w-[244px] max-xl:w-[76px] h-screen sticky px-[12px] pb-[20px] pt-[8px] border-[1px] border-r-gray-3200 flex flex-col max-md:hidden">
      <h1 className="mb-[19px] pt-[25px] px-[12px] pb-[16px] font-bold text-2xl flex items-center">
        <FaInstagram className="size-[29px] xl:hidden" />
        <span className="max-xl:hidden text-xl h-[29px]">Instagram</span>
      </h1>
      <ul>
        {leftSidebarItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
      <ul className="mt-auto">
        <MenuItem
          item={{ title: "Threads", icon: FaThreads, url: "/threads" }}
        />
        <MenuItem
          item={{ title: "Settings", icon: LiaBarsSolid, url: "/settings" }}
        />
      </ul>
    </div>
  );
};

export default LeftSidebar;
