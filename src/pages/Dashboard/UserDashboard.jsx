import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import Sidebar from "../../components/userDashboard/SideBar";
import Overview from "../../components/userDashboard/Overview";
import Orders from "../../components/userDashboard/Orders";
import Wishlist from "../../components/userDashboard/WishList";
import Settings from "../../components/userDashboard/Setting";

const UserDashboard = () => {
  const { user } = useAuth();

  const [active, setActive] = useState("Overview");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-orange-50">

      <div className="max-w-7xl mx-auto flex">

        {/* Sidebar */}

        <Sidebar
          active={active}
          setActive={setActive}
        />

        {/* Main Content */}

        <div className="flex-1 p-8">

          {active === "Overview" && <Overview />}

          {active === "Orders" && <Orders />}

          {active === "Wishlist" && <Wishlist />}

          {active === "Settings" && <Settings />}

        </div>

      </div>

    </div>
  );
};

export default UserDashboard;