import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, setUser, isLogin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("UserData");
    setUser(null);

    navigate("/login");
  };

  return (
    <header className="bg-orange-500 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-white tracking-wide"
        >
          🍔 Cravings
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-6">

          <Link
            to="/"
            className="text-white hover:text-orange-100 font-medium"
          >
            Home
          </Link>

          <Link
            to="/contact"
            className="text-white hover:text-orange-100 font-medium"
          >
            Contact Us
          </Link>

          {isLogin ? (
            <>
              <Link
                to="/dashboard"
                className="text-white hover:text-orange-100 font-medium"
              >
                Dashboard
              </Link>

              <div className="flex items-center gap-3">

                <img
                  src={
                    user?.photo ||
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />

                <span className="text-white font-semibold">
                  {user?.fullName}
                </span>

                <button
                  onClick={handleLogout}
                  className="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-100 transition"
                >
                  Logout
                </button>

              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-orange-100 font-medium"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-100 transition"
              >
                Register
              </Link>
            </>
          )}

        </nav>

      </div>
    </header>
  );
};

export default Navbar;