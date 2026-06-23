import Sidebar from "../components/Sidebar";
import {Outlet} from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8">
        <Outlet/>
      </div>
    </div>
  );
}

export default MainLayout;