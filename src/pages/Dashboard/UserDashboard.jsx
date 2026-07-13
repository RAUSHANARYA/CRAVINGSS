import React from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import Sidebar from "../../components/userDashboard/SideBar";
import Overview from "../../components/userDashboard/Overview";
import Orders from "../../components/userDashboard/Orders";
import Settings from "../../components/userDashboard/Setting";

const UserDashboard = () => {
  const { isLogin, role } = useAuth();
  const navigate = useNavigate();

  const active = useLocation().state?.activeTab;
  const [activeTab, setActiveTab] = React.useState(active || "Overview");

if (!isLogin || role !== "customer") {
  return (
    <div className="h-[92vh] bg-orange-50">
      <div className="h-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">
          Access Denied. Please log in as a Customer.
        </h1>

        <button
          className="mt-5 px-5 py-2 bg-orange-500 text-white rounded-lg"
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-7xl mx-auto flex">
        <Sidebar
          active={activeTab}
          setActive={setActiveTab}
        />

        <div className="flex-1 p-8">
          {activeTab === "Overview" && <Overview />}
          {activeTab === "Orders" && <Orders />}
          {activeTab === "Settings" && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;