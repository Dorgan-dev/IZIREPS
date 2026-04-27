import { MdLiveHelp } from "react-icons/md"; 
import { GiHelp } from "react-icons/gi"; 
import { MdDashboard } from "react-icons/md"; 
import { CgGames } from "react-icons/cg"; 
import { useState } from "react";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState("dashboard");

  return (
    <aside className="w-64 min-h-screen bg-white border-r flex flex-col">

      {/* Logo */}
      <div className="p-6 text-xl font-poppins-extrabold font-bold flex items-center gap-2">
        <CgGames /><span className="text-biru">IZIREPS</span>
      </div>

      {/* Menu */}
      <div className="px-4 text-xs text-gray-400 mb-2">MENU</div>

      <nav className="flex-1 px-2 space-y-1">

        {/* Dashboard */}
        <button
          onClick={() => setOpenMenu(openMenu === "dashboard" ? "" : "dashboard")}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-blue-100 text-blue-600 font-medium"
        >
          <span className="flex items-center gap-2"><MdDashboard />Dashboard</span>
          <span>▾</span>
        </button>

        {/* Submenu */}
        {openMenu === "dashboard" && (
          <div className="ml-6 mt-1 space-y-1">
            <div className="px-3 py-2 rounded-lg bg-blue-50 text-blue-600">
              Ecommerce
            </div>
          </div>
        )}

        {/* Menu items */}
        {[
          "Analytics",
          "Marketing",
          "CRM",
          "Stocks",
          "SaaS",
          "Logistics",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <span>{item}</span>
            {item === "SaaS" || item === "Logistics" ? (
              <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                NEW
              </span>
            ) : null}
          </div>
        ))}

        {/* Dropdown AI Assistant */}
        <button
          onClick={() => setOpenMenu(openMenu === "ai" ? "" : "ai")}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          <MdLiveHelp /><span>AI Assistant</span>
          <span>▾</span>
        </button>

        {openMenu === "ai" && (
          <div className="ml-6 mt-1">
            <div className="px-3 py-2 hover:bg-gray-100 rounded-lg">
              AI Chat
            </div>
          </div>
        )}

      </nav>

      {/* SUPPORT */}
      <div className="px-4 text-xs text-gray-400 mt-4">SUPPORT</div>

      <div className="px-2 space-y-1 pb-6">
        <div className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          💬 Chat
        </div>
        <div className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer flex justify-between">
          <span>🎫 Support Ticket</span>
          <span className="text-xs bg-green-100 text-green-600 px-2 rounded">
            NEW
          </span>
        </div>
      </div>

    </aside>
  );
}