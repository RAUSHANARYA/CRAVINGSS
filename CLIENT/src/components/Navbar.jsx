import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-orange-500 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-white">
          🍔 Cravings
        </h1>

        <nav className="flex items-center gap-6">

          <Link to="/" className="text-white hover:text-orange-100">
            Home
          </Link>

          <Link to="/login" className="text-white hover:text-orange-100">
            Login
          </Link>

          <Link to="/register" className="text-white hover:text-orange-100">
            Register
          </Link>

          <Link to="/contact" className="text-white hover:text-orange-100">
            Contact Us
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;