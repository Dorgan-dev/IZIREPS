import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AiOutlineOrderedList } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaChartBar, FaBox, FaUsers, FaRobot } from "react-icons/fa";
import { CgGames } from "react-icons/cg";

export default function Sidebar() {

  const menuClass = ({ isActive }) =>
    `flex items-center p-3 rounded-lg transition ${
      isActive
        ? "bg-blue-100 text-blue-600 font-semibold"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-white border-r p-5 flex flex-col">

      {/* Logo */}
      <div className="p-6 text-xl font-poppins-extrabold font-bold flex items-center gap-2">
        <CgGames />
        <span className="text-biru">IZIREPS</span>
      </div>

      {/* MAIN MENU */}
      <div className="text-xs text-gray-400 mb-2">MAIN</div>
      <nav className="space-y-2">

        <NavLink to="/" end className={menuClass}>
          <MdDashboard className="mr-3 text-lg" />
          Dashboard
        </NavLink>

        <NavLink to="/orders" className={menuClass}>
          <AiOutlineOrderedList className="mr-3 text-lg" />
          Orders
        </NavLink>

        <NavLink to="/customers" className={menuClass}>
          <BsFillPeopleFill className="mr-3 text-lg" />
          Customers
        </NavLink>

        <NavLink to="/products" className={menuClass}>
          <CgGames className="mr-3 text-lg" />
          Rental PS
        </NavLink>

      </nav>

      {/* MANAGEMENT */}
      <div className="text-xs text-gray-400 mt-6 mb-2">MANAGEMENT</div>
      <nav className="space-y-2">

        <NavLink to="/analytics" className={menuClass}>
          <FaChartBar className="mr-3" />
          Analytics
        </NavLink>

        <NavLink to="/marketing" className={menuClass}>
          <FaUsers className="mr-3" />
          Marketing
        </NavLink>

        <NavLink to="/crm" className={menuClass}>
          <FaUsers className="mr-3" />
          CRM
        </NavLink>

        <NavLink to="/stocks" className={menuClass}>
          <FaBox className="mr-3" />
          Stocks
        </NavLink>

        <NavLink to="/saas" className={menuClass}>
          <FaBox className="mr-3" />
          SaaS
        </NavLink>

        <NavLink to="/logistics" className={menuClass}>
          <FaBox className="mr-3" />
          Logistics
        </NavLink>

      </nav>

      {/* AI */}
      <div className="text-xs text-gray-400 mt-6 mb-2">AI</div>
      <nav className="space-y-2">

        <NavLink to="/ai-chat" className={menuClass}>
          <FaRobot className="mr-3" />
          AI Chat
        </NavLink>

      </nav>

      {/* SUPPORT */}
      <div className="text-xs text-gray-400 mt-6 mb-2">SUPPORT</div>
      <nav className="space-y-2">

        <NavLink to="/chat" className={menuClass}>
          💬 Chat
        </NavLink>

        <NavLink to="/ticket" className={menuClass}>
          🎫 Ticket
        </NavLink>

      </nav>

    </aside>
  );
}