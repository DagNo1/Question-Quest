import NavigationBar from "../../components/NavigationBar";
import Banner from "./Banner";
import Preview from "./Preview";

const Home = () => {
  return (
    <div className="bg-netural min-w-screen min-h-screen">
      <div className="bgGradient w-full min-h-screen">
        <div className="radial-gradient" />
        <NavigationBar/>
        <Banner />
        <Preview />
      </div>
    </div>
  );
};

export default Home;
