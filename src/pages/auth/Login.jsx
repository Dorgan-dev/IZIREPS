import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import {
  BsFillExclamationDiamondFill,
} from "react-icons/bs";

import {
  ImSpinner2,
} from "react-icons/im";

import {
  FiMail,
  FiLock,
} from "react-icons/fi";

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

      // Simpan token
      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      navigate("/");
    } catch (err) {
      if (err.response) {
        setError(
          err.response.data.message ||
            "Email atau password salah"
        );
      } else {
        setError("Network error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">
          Welcome Back 👋
        </h2>

        <p className="text-slate-400 mt-2 text-sm">
          Login untuk melanjutkan ke dashboard
        </p>
      </div>

      {/* ERROR */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 mb-5 p-4 rounded-2xl flex items-center text-sm">
          <BsFillExclamationDiamondFill className="mr-3 text-lg" />
          {error}
        </div>
      )}

      {/* LOADING */}
      {loading && (
        <div className="bg-white/5 border border-white/10 text-slate-300 mb-5 p-4 rounded-2xl flex items-center text-sm">
          <ImSpinner2 className="mr-3 animate-spin text-lg" />
          Mohon Tunggu...
        </div>
      )}

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* EMAIL */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Email / Username
          </label>

          <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-4">
            <FiMail className="text-slate-400 text-lg" />

            <input
              type="text"
              name="email"
              value={dataForm.email}
              onChange={handleChange}
              placeholder="kminchelle"
              required
              className="w-full bg-transparent px-4 py-4 outline-none text-white placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Password
          </label>

          <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-4">
            <FiLock className="text-slate-400 text-lg" />

            <input
              type="password"
              name="password"
              value={dataForm.password}
              onChange={handleChange}
              placeholder="0lelplR"
              required
              className="w-full bg-transparent px-4 py-4 outline-none text-white placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* OPTIONS */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-400">
            <input type="checkbox" />
            Remember me
          </label>

          <Link
            to="/forgot"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            Forgot Password?
          </Link>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition text-white py-4 rounded-2xl font-semibold shadow-xl"
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <ImSpinner2 className="animate-spin" />
              Loading...
            </div>
          ) : (
            "Login"
          )}
        </button>

        {/* REGISTER */}
        <p className="text-center text-slate-400 text-sm pt-2">
          Belum punya akun?
          <Link
            to="/register"
            className="text-cyan-400 hover:text-cyan-300 ml-2"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}