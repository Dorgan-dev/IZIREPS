export default function Logo() {
  return (
    <div className="flex items-center gap-3">

      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">

        <span className="text-xl font-black text-white">
          I
        </span>

      </div>

      <div>
        <h1 className="text-2xl font-black tracking-wide">
          IZIREPS
        </h1>

        <p className="text-xs text-slate-400 -mt-1">
          Playstation Booking
        </p>
      </div>
    </div>
  );
}