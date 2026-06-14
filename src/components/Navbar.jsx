import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" px-8 py-4 flex justify-between items-center shadow-md">

      {/* Logo */}
      <div className="text-2xl font-bold cursor-pointer">
        Cravings
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 font-medium">
        <Link to="/" className="hover:underline">
          Home
        </Link>


        <Link to="/login" className="hover:underline">
          Login
        </Link>

        <Link to="/register" className="hover:underline">
          Register
        </Link>

        <Link to="/contact-us" className="hover:underline">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;