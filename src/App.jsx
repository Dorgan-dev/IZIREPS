import './App.css';
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Analytics from "./pages/Analytics";
import Marketing from "./pages/Marketing";
import CRM from "./pages/CRM";
import Stocks from "./pages/Stocks";
import SaaS from "./pages/SaaS";
import Logistics from "./pages/Logistics";
import AIChat from "./pages/AIChat";
import Chat from "./pages/Chat";
import Ticket from "./pages/Ticket";

function App() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex-1 bg-gray-50 min-h-screen">
        <Header />
        <Routes>
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/saas" element={<SaaS />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </div>
    </div>
  )
}

export default App