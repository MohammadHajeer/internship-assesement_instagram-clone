import { HiOutlineDotsHorizontal } from "react-icons/hi";
import profilePhoto from "../../assets/profile-photo.jpg";
import postPhoto from "../../assets/post.jpg";
import { MdOutlineModeComment } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const Post = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="w-[468px] max-w-full mx-auto">
      <div className="flex justify-between items-center gap-5 max-xs:px-4">
        <div className="flex items-center gap-1">
          <div className="size-[42px] insta-gradient rounded-full p-0.5">
            <img
              src={profilePhoto}
              alt="profile photo"
              className="size-full object-cover rounded-full border-[2px]"
            />
          </div>
          <span className="text-[12px] font-semibold">Mohammad</span>
        </div>
        <HiOutlineDotsHorizontal className="text-xl cursor-pointer" />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <img
          src={postPhoto}
          alt="post"
          className="w-full xs:rounded-lg select-none"
        />
        <div className="flex flex-col gap-2 max-xs: px-2">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 text-xl">
              {liked ? (
                <FaHeart
                  onClick={() => setLiked(!liked)}
                  className="text-red-500 cursor-pointer"
                />
              ) : (
                <FaRegHeart
                  onClick={() => setLiked(!liked)}
                  className="cursor-pointer"
                />
              )}
              <MdOutlineModeComment />
              <BsSend />
            </div>
            <FiBookmark className="text-xl" />
          </div>
          <span className="text-xs font-semibold">{liked ? 10 : 9} likes</span>
          <p className="text-xs font-semibold flex items-center gap-1">
            mohammad
            <span className="font-normal">
              Martyred in 2021 during Gaza's genocide💔
            </span>
          </p>
          <button className="text-xs text-left text-gray-500">
            View all 5 comments
          </button>
          <button className="text-xs text-left text-gray-500">
            Add a comment...
          </button>
        </div>
        <span className="h-[1px] bg-gray-300 w-full block mb-2"></span>
      </div>
    </div>
  );
};

export default Post;
