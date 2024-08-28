import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center max-md:text-9xl text-[200px] bg-background bg-no-repeat bg-cover bg-center font-bold">
      404
      <button
        onClick={() => navigate(-1)}
        className="insta-gradient text-white text-xl px-5 py-3 rounded-xl flex items-center gap-2"
      >
        <FaLongArrowAltLeft />
        Back
      </button>
    </div>
  );
};

export default NotFound;
