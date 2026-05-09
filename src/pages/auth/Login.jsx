import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

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

      navigate("/");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Terjadi error");
      } else {
        setError("Network error");
      }
    } finally {
      setLoading(false);
    }
  };

  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null

  const loadingInfo = loading ? (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome Back 👋
      </h2>

      {/* ERROR */}
      {error && (
        <div className="bg-red-200 mb-5 p-4 text-sm text-gray-700 rounded flex items-center">
          <BsFillExclamationDiamondFill className="text-red-600 mr-2" />
          {error}
        </div>
      )}

      {/* LOADING */}
      {loading && (
        <div className="bg-gray-200 mb-5 p-4 text-sm rounded flex items-center">
          <ImSpinner2 className="mr-2 animate-spin" />
          Mohon Tunggu...
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* EMAIL */}
        <div className="mb-5">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="text"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-6">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="********"
            required
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}