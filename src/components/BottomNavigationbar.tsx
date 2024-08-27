import { bottomNavigationBarItems } from "../constants";
import MenuItem from "./MenuItem";

const BottomNavigationbar = () => {
  return (
    <ul className="fixed bottom-0 left-0 right-0 flex justify-around border-[1px] border-t-gray-200 md:hidden bg-white">
      {bottomNavigationBarItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default BottomNavigationbar;
