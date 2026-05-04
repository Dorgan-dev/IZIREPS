import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      
      <div className="flex flex-row flex-1">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className="flex-1 p-4">
          <Header />

          {/* Ini pengganti <Routes> */}
          <Outlet />
        </div>

      </div>
    </div>
  );
}