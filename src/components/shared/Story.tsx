import userPhoto from "../../assets/profile-photo.jpg";

const Story = () => {
  return (
    <div>
      <div className="insta-gradient size-[66px] rounded-full p-0.5">
        <img
          src={userPhoto}
          alt="user"
          className="size-full rounded-full object-cover border-[2px]"
        />
      </div>
      <span className="block text-[12px] w-[70px] truncate">mohammadwad</span>
    </div>
  );
};

export default Story;
