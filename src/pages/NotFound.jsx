import { Link } from "react-router-dom";
import { FaGamepad } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b1120] relative overflow-hidden flex items-center justify-center px-6">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-2xl">

        {/* ICON */}
        <div className="w-32 h-32 rounded-[30px] bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto shadow-2xl mb-10">

          <FaGamepad className="text-white text-6xl" />

        </div>

        {/* 404 */}
        <h1 className="text-[120px] md:text-[170px] font-black leading-none bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
          Halaman Tidak Ditemukan
        </h2>

        {/* DESCRIPTION */}
        <p className="text-slate-400 text-lg leading-relaxed mt-6">
          Maaf, halaman yang kamu cari mungkin sudah dipindahkan,
          dihapus, atau URL yang dimasukkan salah.
        </p>

        {/* BUTTON */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">

          {/* HOME */}
          <Link
            to="/"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 text-white font-semibold shadow-2xl"
          >
            Kembali ke Landing Page
          </Link>

          {/* DASHBOARD */}
          <Link
            to="/dashboard"
            className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition text-white font-semibold"
          >
            Masuk Dashboard
          </Link>

        </div>

      </div>
    </div>
  );
}