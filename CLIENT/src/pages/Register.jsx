import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
    const handleSubmit = (e) => {
      e.preventDefault();

      console.clear();

      console.log("Submit Button Clicked");
      console.log("User Registered:", formData);
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-5 py-10">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-10">
        <h1 className="text-4xl font-bold text-center text-orange-500">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Join Cravings and start ordering your favourite food.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>
          </div>

          {/* Gender & DOB */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Gender
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Date of Birth
              </label>

              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>
          </div>

          {/* Password */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-orange-500 text-sm"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="text-orange-500 text-sm"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>
          </div>

          {/* Button */}
      <button
  type="button"
  onClick={handleSubmit}
  className="w-full bg-orange-500 text-white py-3 rounded-xl"
>
  Test Button
</button>
        </form>

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-500 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;