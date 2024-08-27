import { quickLinks } from "../constants";
import ProfileCard from "./ProfileCard";

const RightSidebar = () => {
  return (
    <div className="w-[383px] pl-[64px] max-xl:hidden">
      <div className="mt-[36px] pl-2 pr-5">
        <ProfileCard type="switch" />
        <div className="flex justify-between items-center gap-5 text-[13px] my-5">
          <p className="text-gray-500 font-semibold">Suggested for you</p>
          <button className="font-medium">See All</button>
        </div>
        <div className="space-y-3">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <ProfileCard key={index} type="follow" />
            ))}
        </div>
        <ul className="flex flex-wrap mt-5 gap-1 items-end leading-none l">
          {quickLinks.map((link, index) => (
            <>
              <li key={index} className="leading-none">
                <a
                  href={link.url}
                  className="hover:underline text-gray-400 text-[12px]"
                >
                  {link.title}
                </a>
              </li>
              {index !== quickLinks.length - 1 && (
                <span className="text-gray-400">.</span>
              )}
            </>
          ))}
        </ul>
        <p className="text-gray-400 text-[12px] uppercase font-semibold mt-5">
          @ 2024 Instagram from meta
        </p>
      </div>
    </div>
  );
};

export default RightSidebar;
