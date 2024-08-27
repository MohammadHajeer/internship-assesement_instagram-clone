import Feed from "../components/shared/Feed";
import RightSidebar from "../components/menubars/RightSidebar";
import TopNavigationbar from "../components/menubars/TopNavigationbar";

const Home = () => {
  return (
    <div className="flex justify-center flex-1">
      <Feed />
      <RightSidebar />
      <TopNavigationbar />
    </div>
  );
};

export default Home;
