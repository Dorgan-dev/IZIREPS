import { Outlet } from "react-router-dom";
import { CgGames } from "react-icons/cg";

export default function AuthLayout() {
  return (
    // Menggunakan grid/flex langsung pada container utama agar memenuhi tinggi layar penuh
    <div className="min-h-screen w-full flex bg-slate-900 text-white overflow-hidden">
      
      {/* ================= SISI KIRI: BRANDING & ILUSTRASI (50% Layar) ================= */}
      {/* Menggunakan lg:flex agar terbelah sempurna di layar besar dan hidden di layar kecil */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-950 p-16 flex-col justify-between relative border-r border-slate-800">
        
        {/* Efek Garis Grid Halus ala TailAdmin Modern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        {/* Atas: Brand Identity */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md">
            <CgGames className="text-xl text-white" />
          </div>
          <span className="text-xl font-bold tracking-wider">IZIREPS</span>
        </div>

        {/* Tengah: Pesan Selamat Datang */}
        <div className="my-auto relative z-10 max-w-md">
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">
            Sistem Dasbor Admin <br />
            <span className="text-blue-500">Generasi Baru.</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Kelola data bisnis, pantau analitik performa, dan tingkatkan produktivitas tim Anda dalam satu platform terintegrasi.
          </p>

          {/* Elemen Dekoratif Lingkaran Berputar */}
          <div className="mt-12 opacity-30 flex justify-start">
            <div className="relative w-40 h-40 border border-dashed border-slate-500 rounded-full flex items-center justify-center animate-spin-slow">
              <div className="w-24 h-24 border border-slate-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bawah: Footer Kiri */}
        <p className="text-xs text-slate-500 relative z-10">
          &copy; {new Date().getFullYear()} IZIREPS. All rights reserved.
        </p>
      </div>

      {/* ================= SISI KANAN: FORM (<Outlet />) (50% Layar) ================= */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-8 sm:p-16 md:p-24 bg-slate-900 relative z-10">
        
        {/* Header Kosong / Spacer atas agar posisi form tetap simetris di tengah */}
        <div className="hidden lg:block h-10"></div>

        {/* Brand khusus Tampilan Mobile (Muncul saat sisi kiri hilang) */}
        <div className="flex lg:hidden items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
            <CgGames className="text-xl text-white" />
          </div>
          <span className="text-xl font-bold tracking-wider">IZIREPS</span>
        </div>

        {/* Tempat Form Login / Register */}
        <div className="w-full max-w-md mx-auto my-auto">
          <Outlet />
        </div>
        
        {/* Footer Kanan */}
        <div className="mt-8 text-center pt-5 border-t border-slate-800/60 lg:border-none">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} IZIREPS Dashboard. All rights reserved.
          </p>
        </div>
      </div>

    </div>
  );
}