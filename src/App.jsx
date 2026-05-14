import './App.css';
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "./components/Loading";


import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from './layouts/GuestLayout';

import Guest from './pages/Guest';



const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Analytics = React.lazy(() => import("./pages/Analytics"));
const Marketing = React.lazy(() => import("./pages/Marketing"));
const CRM = React.lazy(() => import("./pages/CRM"));
const Stocks = React.lazy(() => import("./pages/Stocks"));
const SaaS = React.lazy(() => import("./pages/SaaS"));
const Logistics = React.lazy(() => import("./pages/Logistics"));
const AIChat = React.lazy(() => import("./pages/AIChat"));
const Chat = React.lazy(() => import("./pages/Chat"));
const Ticket = React.lazy(() => import("./pages/Ticket"));

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

const Landing = React.lazy(() => import("./pages/Landing"));
const NotFound = React.lazy(() => import("./pages/NotFound"));



function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* LANDING PAGE */}
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>

        {/* AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* MAIN */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
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
        </Route>

           {/* NOT FOUND */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;