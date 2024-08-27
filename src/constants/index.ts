import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline, IoCompassOutline } from "react-icons/io5";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { TbMessageCircleBolt } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { BiMessageSquareAdd } from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";

import profilePhoto from '../assets/profile-photo.jpg';

export const leftSidebarItems = [
    {
        title: 'Home',
        icon: MdHomeFilled,
        url: '/'
    },
    {
        title: 'Search',
        icon: IoSearchOutline,
        url: '/search'
    },
    {
        title: 'Explore',
        icon: IoCompassOutline,
        url: '/explore'
    },
    {
        title: 'Reels',
        icon: HiOutlineVideoCamera,
        url: '/reels'
    },
    {
        title: 'Messages',
        icon: TbMessageCircleBolt,
        url: '/messages'
    },
    {
        title: 'Notifications',
        icon: FaRegHeart,
        url: '/notifications'
    },
    {
        title: 'Create',
        icon: BiMessageSquareAdd,
        url: '/create'
    },
    {
        title: 'Profile',
        img: profilePhoto,
        url: '/profile'
    },
]

export const bottomNavigationBarItems = [
    {
        title: 'Home',
        icon: MdHomeFilled,
        url: '/'
    },
    {
        title: 'Explore',
        icon: IoCompassOutline,
        url: '/explore'
    },
    {
        title: 'Reels',
        icon: HiOutlineVideoCamera,
        url: '/reels'
    },
    {
        title: 'Create',
        icon: BiMessageSquareAdd,
        url: '/create'
    },
    {
        title: 'Messages',
        icon: TbMessageCircleBolt,
        url: '/messages'
    },
    {
        title: 'Profile',
        img: profilePhoto,
        url: '/profile'
    },
]

export const quickLinks = [
    {
        title: 'About',
        url: '#'
    },
    {
        title: 'Help',
        url: '#'
    },
    {
        title: 'Press',
        url: '#'
    },
    {
        title: 'API',
        url: '#'
    },
    {
        title: 'Jobs',
        url: '#'
    },
    {
        title: 'Privacy',
        url: '#'
    },
    {
        title: 'Terms',
        url: '#'
    },
    {
        title: 'Locations',
        url: '#'
    },
    {
        title: 'Language',
        url: '#'
    },
    {
        title: 'Meta Verified',
        url: '#'
    },
]