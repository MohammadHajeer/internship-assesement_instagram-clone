import { Outlet } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import BottomNavigationbar from "../components/BottomNavigationbar";

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
