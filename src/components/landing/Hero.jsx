import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 relative overflow-hidden">

      {/* BLUR */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-200px] left-[-200px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}
        <div>

          <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">
            #1 Playstation Dashboard
          </span>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight mt-8">
            Kelola Booking
            <span className="text-blue-500"> Playstation </span>
            Lebih Modern
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mt-8 max-w-xl">
            Dashboard premium untuk rental Playstation modern
            dengan sistem booking realtime dan analytics lengkap.
          </p>

          <div className="flex gap-4 mt-10">

            <Link
              to="/register"
              className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl font-bold"
            >
              Mulai Sekarang
            </Link>

            <button className="border border-white/10 hover:bg-white/10 transition px-8 py-4 rounded-2xl">
              Live Demo
            </button>

          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-6 shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1200&auto=format&fit=crop"
              alt="dashboard"
              className="rounded-3xl w-full h-[500px] object-cover"
            />

          </div>

        </div>
      </div>
    </section>
  );
}