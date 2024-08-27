import profilePhoto from "../assets/profile-photo.jpg";

type Props = {
  type: "follow" | "switch";
};

const ProfileCard = ({ type }: Props) => {
  return (
    <div className="flex items-center gap-5 justify-between">
      <div className="flex items-center gap-2">
        <div className="size-[44px] rounded-full overflow-hidden">
          <img
            src={profilePhoto}
            alt="profile"
            className="size-full object-cover"
          />
        </div>
        <div className="text-[13px]">
          <h3 className="font-bold">smile.itzsunnah.1</h3>
          <span className="text-gray-500">Mohammad Hajeer</span>
        </div>
      </div>
      <button className="text-[12px] text-[#0095F6] font-bold">
        {type === "follow" ? "Follow" : "Switch"}
      </button>
    </div>
  );
};

export default ProfileCard;
