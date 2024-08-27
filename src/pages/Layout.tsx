import { Outlet } from "react-router-dom";
import LeftSidebar from "../components/menubars/LeftSidebar";
import BottomNavigationbar from "../components/menubars/BottomNavigationbar";

const Layout = () => {
  return (
    <div className="flex">
      <LeftSidebar />
      <BottomNavigationbar />
      <Outlet />
    </div>
  );
};

export default Layout;
