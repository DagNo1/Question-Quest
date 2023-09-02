import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";

const MainLayout = () => {
  return (
    <div className="bg-netural w-full max-lg:min-h-screen">
      <div className="bgGradient w-full max-lg:min-h-screen">
        <NavigationBar seeThrough={false}/>
        <Outlet className="w-full"/>
      </div>
    </div>
  );
};

export default MainLayout;
