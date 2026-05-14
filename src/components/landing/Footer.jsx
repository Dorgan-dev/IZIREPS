export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/10 py-10">

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">

        <div>
          <h2 className="text-2xl font-black">
            IZIREPS
          </h2>

          <p className="text-slate-400 mt-2">
            Playstation Booking Dashboard
          </p>
        </div>

        <div className="flex gap-6 text-slate-400 text-sm">

          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>

        </div>

      </div>
    </footer>
  );
}