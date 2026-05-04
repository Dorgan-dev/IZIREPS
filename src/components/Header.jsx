import { IoMdNotifications } from "react-icons/io"; 
import { MdDarkMode } from "react-icons/md"; 
import { CiDark } from "react-icons/ci"; 
export default function Header() {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      
      {/* Left */}
      <div className="flex items-center gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Search or type command..."
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100"><MdDarkMode /></button>
        <button className="p-2 rounded-full hover:bg-gray-100"><IoMdNotifications /></button>

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Admin</span>
        </div>
      </div>

    </header>
  )
}