import React from "react";
import {
  MdDashboard,
  MdFastfood,
  MdFavorite,
  MdSettings,
  MdLogout,
} from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const menuItems = [
  {
    name: "Overview",
    icon: <MdDashboard size={22} />,
  },
  {
    name: "Orders",
    icon: <MdFastfood size={22} />,
  },
  {
    name: "Wishlist",
    icon: <MdFavorite size={22} />,
  },
  {
    name: "Settings",
    icon: <MdSettings size={22} />,
  },
];

const Sidebar = ({ active, setActive }) => {
  const navigate = useNavigate();

  const { user, setUser } = useAuth();

  const logoutHandler = () => {
    sessionStorage.removeItem("UserData");

    setUser(null);

    toast.success("Logout Successful");

    navigate("/login");
  };

  return (
    <div className="w-72 min-h-screen bg-white shadow-xl flex flex-col justify-between">

      {/* Top */}

      <div>

        <div className="bg-orange-500 text-white text-center py-8">

         <img
          src={
            user?.photo?.url ||
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto border-4 border-white object-cover"
        />

          <h2 className="mt-4 text-xl font-bold">
            {user.fullName}
          </h2>

          <p className="text-orange-100 text-sm">
            {user.email}
          </p>

        </div>

        {/* Menu */}

        <div className="p-5 space-y-3">

          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition duration-300

              ${
                active === item.name
                  ? "bg-orange-500 text-white shadow-lg"
                  : "hover:bg-orange-100 text-gray-700"
              }`}
            >
              {item.icon}

              <span className="font-semibold">
                {item.name}
              </span>
            </button>
          ))}

        </div>

      </div>

      {/* Bottom */}

      <div className="p-5">

        <button
          onClick={logoutHandler}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
        >
          <MdLogout size={22} />

          Logout
        </button>

      </div>

    </div>
  );
};

export default Sidebar;