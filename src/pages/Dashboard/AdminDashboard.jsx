import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import AdminSidebar from "../../components/adminDashboard/AdminSidebar";
import AdminOverview from "../../components/adminDashboard/AdminOverview";
import AdminOrders from "../../components/adminDashboard/AdminOrders";
import AdminSetting from "../../components/adminDashboard/AdminSetting";

const AdminDashboard = () => {
  const { isLogin, role } = useAuth();

  const navigate = useNavigate();

  const active = useLocation().state?.activeTab;
  const [activeTab, setActiveTab] = React.useState(
    active || "overview"
  );

  if (!isLogin || role !== "admin") {
    return (
      <div className="h-[92vh] bg-orange-50">
        <div className="h-full flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">
            Access Denied. Please login as Admin.
          </h1>

          <button
            onClick={() => navigate("/login")}
            className="mt-5 px-5 py-2 bg-orange-500 text-white rounded-lg"
          >
            Go To Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-7xl mx-auto flex">

        <div className="w-72">
          <AdminSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        <div className="flex-1 p-8">

          {activeTab === "overview" && (
            <AdminOverview />
          )}

          {activeTab === "orders" && (
            <AdminOrders />
          )}

          {activeTab === "settings" && (
            <AdminSetting />
          )}

        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;