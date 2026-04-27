import { createRoot } from 'react-dom/client'

import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";

import './assets/tailwind.css'

createRoot(document.getElementById('root')).render(
  <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Header />
      <Dashboard />
    </div>
  </div>
)