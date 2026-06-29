import Sidebar from "../components/Sidebar";
import {Outlet} from "react-router-dom";
import WelcomeBanner from "../components/WelcomeBanner";

function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8">
        <WelcomeBanner/>
        <Outlet/>
      </div>
    </div>
  );
}

export default MainLayout;