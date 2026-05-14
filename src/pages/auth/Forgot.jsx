import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiArrowLeft,
  FiSend,
} from "react-icons/fi";

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

      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">
          Forgot Password 🔐
        </h2>

        <p className="text-slate-400 mt-3 leading-relaxed">
          Masukkan email akun kamu dan kami akan mengirimkan
          link reset password.
        </p>
      </div>

      {/* Success Message */}
      {success && (
        <div className="mb-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-4 rounded-2xl text-sm">
          Link reset password berhasil dikirim ke email kamu.
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Email */}
        <div>
          <label className="text-sm text-slate-300 mb-2 block">
            Email Address
          </label>

          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-white placeholder:text-slate-500 rounded-2xl py-4 pl-12 pr-4 transition"
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition text-white py-4 rounded-2xl font-semibold shadow-lg"
        >
          <FiSend />
          Send Reset Link
        </button>
      </form>

      {/* Back Login */}
      <div className="text-center mt-8">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-medium"
        >
          <FiArrowLeft />
          Back to Login
        </Link>
      </div>
    </div>
  );
}