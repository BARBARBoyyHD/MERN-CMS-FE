import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../redux"; // Ensure this action is correctly implemented

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.login); // Ensure your Redux state has this structure
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(formData)); // Dispatch the login action
      if (!error) {
        navigate("/pages/dashboard"); // Navigate on successful login
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <form
        className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg p-6 rounded-lg w-full max-w-md"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-200">
          Login
        </h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-300"
          >
            Your username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-white text-black placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-white text-black placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error.message || "Invalid username or password"}
          </p>
        )}
        <div className="flex items-center mb-4">
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
          />
          <label htmlFor="remember" className="ml-2 text-sm text-gray-300">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500/70 text-white py-2 px-4 rounded-lg hover:bg-blue-600/90 transition-colors"
          disabled={loading} // Disable button while loading
        >
          {loading ? "Logging in..." : "Submit"}
        </button>
        <p className="mt-4 text-center text-sm text-gray-300">
          Don't have an account?{" "}
          <Link to="/pages/register" className="text-white hover:underline">
            Register Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
