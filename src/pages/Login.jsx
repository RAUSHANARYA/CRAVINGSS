import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../config/api.config";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  // Auth Context
const {
  setUser,
  setIsLogin,
  setRole,
} = useAuth();

  // Login Form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/auth/login", formData);

      // Success Message
      toast.success(res.data.message);

      // Save User in Session Storage
       sessionStorage.setItem(
          "UserData",
          JSON.stringify(res.data.data)
        );

        setUser(res.data.data);
        setIsLogin(true);
        setRole(res.data.data.userType);

        if (res.data.data.userType === "admin") {
          navigate("/admin-dashboard");
        }
        else if (res.data.data.userType === "restaurant") {
          navigate("/restaurant-dashboard");
        }
        else if (res.data.data.userType === "rider") {
          navigate("/rider-dashboard");
        }
        else {
          navigate("/dashboard");
        }

      // Clear Form
      setFormData({
        email: "",
        password: "",
      });

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );

      console.log(error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-5">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 p-10">

        <h1 className="text-4xl font-bold text-center text-orange-500">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Login to continue ordering your favourite food.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          {/* Password */}

          <div>

            <div className="flex justify-between items-center mb-2">

              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-orange-500 hover:text-orange-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />

          </div>

          {/* Remember Me */}

          <div className="flex justify-between items-center">

            <label className="flex items-center gap-2 text-sm text-gray-600">

              <input
                type="checkbox"
                className="accent-orange-500"
              />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="text-sm text-orange-500 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Login Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-xl font-semibold text-lg shadow-lg transition duration-300 hover:scale-[1.02]"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>

        {/* Register */}

        <div className="border-t mt-8 pt-6 text-center">

          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-orange-500 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;