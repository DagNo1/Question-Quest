import NavigationBar from "../../components/NavigationBar";
import Banner from "./Banner";
import Preview from "./Preview";
import Carousel from "./Carousel";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-netural min-w-screen min-h-screen">
      <div className="bgGradient w-full min-h-screen">
        <div className="radial-gradient" />
        <NavigationBar seeThrough={true}/>
        <Banner />
        <Preview />
        {/* <Carousel/> */}
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
