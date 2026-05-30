import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { FiMail, FiLock } from "react-icons/fi";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://dummyjson.com/user/login",
        {
          username: dataForm.email,
          password: dataForm.password,
        }
      );

      if (response.status !== 200) {
        setError("Login gagal");
        return;
      }

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Email atau password salah");
      } else {
        setError("Network error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Header Form */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Welcome Back 👋
        </h2>
        <p className="text-slate-400 mt-2 text-sm">
          Silakan masukkan akun Anda untuk melanjutkan ke dasbor.
        </p>
      </div>

      {/* NOTIFIKASI ERROR */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center text-sm mb-6 animate-fade-in">
          <BsFillExclamationDiamondFill className="mr-3 text-lg flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* NOTIFIKASI LOADING */}
      {loading && (
        <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 p-4 rounded-xl flex items-center text-sm mb-6">
          <ImSpinner2 className="mr-3 animate-spin text-lg flex-shrink-0" />
          <span>Memproses otentikasi, mohon tunggu...</span>
        </div>
      )}

      {/* FORM UTAMA */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* INPUT EMAIL */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Email / Username
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-4 text-slate-500">
              <FiMail className="text-lg" />
            </span>
            <input
              type="text"
              name="email"
              value={dataForm.email}
              onChange={handleChange}
              placeholder="Masukkan email atau username"
              autoComplete="username"
              required
              disabled={loading}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition disabled:opacity-50 placeholder:text-slate-600"
            />
          </div>
        </div>

        {/* INPUT PASSWORD */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Password
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-4 text-slate-500">
              <FiLock className="text-lg" />
            </span>
            <input
              type="password"
              name="password"
              value={dataForm.password}
              onChange={handleChange}
              placeholder="Masukkan password"
              autoComplete="current-password"
              required
              disabled={loading}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition disabled:opacity-50 placeholder:text-slate-600"
            />
          </div>
        </div>

        {/* OPSI TAMBAHAN */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-400 cursor-pointer select-none">
            <input 
              type="checkbox" 
              className="rounded border-slate-800 bg-slate-950 text-blue-600 focus:ring-0 focus:ring-offset-0 w-4 h-4 accent-blue-600"
            />
            Ingat saya
          </label>
          <Link
            to="/forgot"
            className="text-sm font-medium text-blue-500 hover:text-blue-400 transition"
          >
            Lupa Password?
          </Link>
        </div>

        {/* TOMBOL SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition text-white py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/10 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <ImSpinner2 className="animate-spin" />
              Menghubungkan...
            </>
          ) : (
            "Masuk ke Akun"
          )}
        </button>

        {/* NAVIGASI KE REGISTER */}
        <p className="text-center text-slate-400 text-sm pt-2">
          Belum memiliki akun?
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-400 font-medium ml-1 transition"
          >
            Daftar Sekarang
          </Link>
        </p>
      </form>
    </div>
  );
} 