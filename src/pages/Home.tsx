import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";
import TopNavigationbar from "../components/TopNavigationbar";

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
