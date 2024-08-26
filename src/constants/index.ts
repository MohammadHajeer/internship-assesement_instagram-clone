import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline, IoCompassOutline } from "react-icons/io5";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { TbMessageCircleBolt } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { BiMessageSquareAdd } from "react-icons/bi";
// import { FaThreads } from "react-icons/fa6";
// import { LiaBarsSolid } from "react-icons/lia";
// import { MdOutlineModeComment } from "react-icons/md";
// import { BsSend } from "react-icons/bs";
// import { FiBookmark } from "react-icons/fi";

export const sidebarMenuItems = [
    {
        title: 'Home',
        icon: MdHomeFilled
    },
    {
        title: 'Search',
        icon: IoSearchOutline
    },
    {
        title: 'Explore',
        icon: IoCompassOutline
    },
    {
        title: 'Reels',
        icon: HiOutlineVideoCamera
    },
    {
        title: 'Messages',
        icon: TbMessageCircleBolt
    },
    {
        title: 'Notifications',
        icon: FaRegHeart
    },
    {
        title: 'Create',
        icon: BiMessageSquareAdd
    },
    {
        title: 'Profile',
        img: ''
    },
]