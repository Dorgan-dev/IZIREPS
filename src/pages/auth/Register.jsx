import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiMail,
  FiLock,
  FiUser,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [dataForm, setDataForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dataForm.password !== dataForm.confirmPassword) {
      alert("Password tidak sama");
      return;
    }

    alert("Register berhasil 🚀");

    navigate("/login");
  };

  return (
    <div className="w-full">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">
          Create Account ✨
        </h2>

        <p className="text-slate-400 mt-3">
          Daftar dan mulai gunakan Sedap sekarang.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Full Name */}
        <div>
          <label className="text-sm text-slate-300 mb-2 block">
            Full Name
          </label>

          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

            <input
              type="text"
              name="fullname"
              value={dataForm.fullname}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-white placeholder:text-slate-500 rounded-2xl py-4 pl-12 pr-4 transition"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-slate-300 mb-2 block">
            Email Address
          </label>

          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

            <input
              type="email"
              name="email"
              value={dataForm.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-white placeholder:text-slate-500 rounded-2xl py-4 pl-12 pr-4 transition"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-slate-300 mb-2 block">
            Password
          </label>

          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={dataForm.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-white placeholder:text-slate-500 rounded-2xl py-4 pl-12 pr-14 transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-sm text-slate-300 mb-2 block">
            Confirm Password
          </label>

          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              value={dataForm.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full bg-white/5 border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-white placeholder:text-slate-500 rounded-2xl py-4 pl-12 pr-14 transition"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition"
            >
              {showConfirm ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition text-white py-4 rounded-2xl font-semibold shadow-lg mt-2"
        >
          Create Account
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-slate-400 text-sm mt-8">
        Already have an account?
        <Link
          to="/login"
          className="text-cyan-400 hover:text-cyan-300 ml-2 font-medium"
        >
          Login
        </Link>
      </p>
    </div>
  );
}