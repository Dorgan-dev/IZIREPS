import { Link } from "react-router-dom";
import { FaGamepad } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-xl">
            <FaGamepad />
          </div>

          <div>
            <h1 className="font-black text-xl">
              IZIREPS
            </h1>

            <p className="text-xs text-slate-400">
              Playstation Booking
            </p>
          </div>
        </div>

        {/* MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-300">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>

          <a href="#pricing" className="hover:text-white transition">
            Pricing
          </a>

          <a href="#testimonials" className="hover:text-white transition">
            Testimonials
          </a>
        </nav>

        {/* BUTTON */}
        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="text-slate-300 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-2xl font-semibold"
          >
            Get Started
          </Link>

        </div>
      </div>
    </header>
  );
}