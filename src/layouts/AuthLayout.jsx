import { Outlet } from "react-router-dom";
import { CgGames } from "react-icons/cg";


export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border">

        {/* Logo (samakan dengan Sidebar) */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="text-3xl flex items-center gap-2 font-bold">
            <CgGames className="text-blue-500" />
            <span className="text-gray-800">IZIREPS</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Admin Dashboard
          </p>
        </div>

        {/* Form Content */}
        <Outlet />

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          © 2025 IZIREPS Dashboard. All rights reserved.
        </p>
      </div>
    </div>
  );
}