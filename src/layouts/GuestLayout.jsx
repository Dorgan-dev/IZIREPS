import { Outlet, Link } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiMenu,
} from "react-icons/fi";

import Logo from "../components/Logo";

export default function GuestLayout() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-[#0b1120]/80">

        <div className="max-w-[1700px] mx-auto px-6 lg:px-10">

          <div className="h-20 flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-14">

              {/* LOGO */}
              <Logo />

              {/* MENU */}
              <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">

                <a
                  href="#home"
                  className="hover:text-cyan-400 transition"
                >
                  Home
                </a>

                <a
                  href="#features"
                  className="hover:text-cyan-400 transition"
                >
                  Features
                </a>

                <a
                  href="#games"
                  className="hover:text-cyan-400 transition"
                >
                  Games
                </a>

                <a
                  href="#pricing"
                  className="hover:text-cyan-400 transition"
                >
                  Pricing
                </a>

                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition"
                >
                  Contact
                </a>

              </nav>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">

              {/* SEARCH */}
              <button className="hidden md:flex w-11 h-11 rounded-xl bg-white/5 border border-white/10 items-center justify-center hover:bg-cyan-500 transition">
                <FiSearch />
              </button>

              {/* CART */}
              <button className="hidden md:flex w-11 h-11 rounded-xl bg-white/5 border border-white/10 items-center justify-center hover:bg-cyan-500 transition">
                <FiShoppingCart />
              </button>

              {/* LOGIN */}
              <Link
                to="/login"
                className="hidden md:flex px-5 py-2.5 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition text-sm font-semibold"
              >
                Login
              </Link>

              {/* REGISTER */}
              <Link
                to="/register"
                className="hidden md:flex px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition text-sm font-semibold shadow-lg"
              >
                Register
              </Link>

              {/* MOBILE MENU */}
              <button className="lg:hidden w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <FiMenu />
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main>
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-white/10 mt-20"
      >
        <div className="max-w-[1700px] mx-auto px-6 lg:px-10 py-14">

          <div className="grid md:grid-cols-3 gap-10">

            {/* LEFT */}
            <div>
              <Logo />

              <p className="text-slate-400 mt-5 leading-relaxed">
                IZIREPS adalah platform booking Playstation modern
                dengan tampilan premium dan sistem kasir realtime.
              </p>
            </div>

            {/* MENU */}
            <div>
              <h2 className="text-lg font-semibold mb-5">
                Navigation
              </h2>

              <div className="space-y-3 text-slate-400">

                <p className="hover:text-cyan-400 cursor-pointer transition">
                  Home
                </p>

                <p className="hover:text-cyan-400 cursor-pointer transition">
                  Features
                </p>

                <p className="hover:text-cyan-400 cursor-pointer transition">
                  Pricing
                </p>

                <p className="hover:text-cyan-400 cursor-pointer transition">
                  Contact
                </p>

              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h2 className="text-lg font-semibold mb-5">
                Contact
              </h2>

              <div className="space-y-3 text-slate-400">
                <p>Email: izireps@gmail.com</p>
                <p>Phone: +62 812 3456 7890</p>
                <p>Location: Pekanbaru, Indonesia</p>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 mt-10 pt-6 text-center text-slate-500 text-sm">
            © 2026 IZIREPS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}