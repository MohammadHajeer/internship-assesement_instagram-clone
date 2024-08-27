import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

type Props = {
  item: {
    title: string;
    icon?: IconType;
    img?: string;
    url: string;
  };
};

const MenuItem = ({ item }: Props) => {
  const activeClassStyle = ({ isActive: active }: { isActive: boolean }) => {
    if (active) {
      return { fontWeight: "bold", color: "black" };
    }
  };
  return (
    <li>
      <NavLink
        style={activeClassStyle}
        to={item.url}
        className="flex items-center p-[12px] cursor-pointer gap-3 hover:bg-gray-200 rounded-md transition-all group my-[4px]"
      >
        <div className="size-6">
          {item.icon ? (
            <item.icon className="size-full group-hover:scale-[1.05] transition-all" />
          ) : (
            <img
              src={item.img}
              alt={item.title}
              className="size-full rounded-full bg-cover group-hover:scale-[1.05] transition-all"
            />
          )}
        </div>
        <span className="text-sm max-xl:hidden">{item.title}</span>
      </NavLink>
    </li>
  );
};

export default MenuItem;
