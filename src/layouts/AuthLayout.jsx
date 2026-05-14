import { Outlet } from "react-router-dom";
import { CgGames } from "react-icons/cg";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>

      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md mx-4">

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="px-10 pt-10 pb-8 text-center border-b border-white/10">

            {/* Logo */}
            <div className="flex justify-center mb-5">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-xl">
                <CgGames className="text-4xl text-white" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-white tracking-tight">
              IZIREPS
            </h1>

            <p className="text-slate-400 mt-3 text-sm leading-relaxed">
              Modern Admin Dashboard System
            </p>
          </div>

          {/* Form */}
          <div className="px-10 py-8">
            <Outlet />
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 px-10 py-5 text-center">
            <p className="text-slate-500 text-sm">
              © 2025 IZIREPS Dashboard. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}