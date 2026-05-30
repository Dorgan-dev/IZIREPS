import { FiSearch, FiBell } from "react-icons/fi";

export default function CashierHeader() {
  return (
    <header className="bg-[#111827] border-b border-white/10 px-8 py-4 flex items-center justify-between">
      
      {/* Search */}
      <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden w-[350px]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-3 bg-transparent outline-none text-white"
        />

        <button className="px-4 text-slate-400">
          <FiSearch />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        
        <button className="text-white text-xl">
          <FiBell />
        </button>

        <div className="flex items-center gap-3">
          <img
            src="https://avatar.iran.liara.run/public"
            alt="avatar"
            className="w-11 h-11 rounded-full"
          />

          <div>
            <h3 className="text-white font-semibold">
              Admin
            </h3>

            <p className="text-slate-400 text-sm">
              Cashier
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}