import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiArrowLeft, FiSend } from "react-icons/fi";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setSuccess(true);
  };

  return (
    <div className="w-full">
      {/* ================= HEADER KONTEN ================= */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Forgot Password 🔐
        </h2>
        <p className="text-slate-400 mt-2 text-sm leading-relaxed">
          Masukkan email akun Anda dan kami akan mengirimkan instruksi beserta tautan untuk mengatur ulang kata sandi.
        </p>
      </div>

      {/* ================= NOTIFIKASI SUKSES ================= */}
      {success && (
        <div className="mb-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-sm animate-fade-in">
          Tautan pemulihan kata sandi berhasil dikirim! Silakan periksa kotak masuk atau folder spam email Anda.
        </div>
      )}

      {/* ================= FORM UTAMA ================= */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* INPUT EMAIL */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Email Address
          </label>
          <div className="relative flex items-center">
            {/* Posisi Ikon yang Presisi */}
            <span className="absolute left-4 text-slate-500">
              <FiMail className="text-lg" />
            </span>
            <input
              type="email"
              placeholder="nama@perusahaan.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder:text-slate-600"
            />
          </div>
        </div>

        {/* TOMBOL SUBMIT */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition text-white py-3.5 rounded-xl font-medium text-sm shadow-lg shadow-blue-600/10"
        >
          <FiSend className="text-base" />
          Kirim Link Reset
        </button>
      </form>

      {/* ================= NAVIGASI KEMBALI ================= */}
      <div className="text-center mt-8 pt-2">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition"
        >
          <FiArrowLeft className="text-base" />
          Kembali ke Halaman Login
        </Link>
      </div>
    </div>
  );
}