import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import RiderSidebar from "../../components/riderDashboard/RiderSidebar";
import RiderOverview from "../../components/riderDashboard/RiderOverview";
import RiderOrders from "../../components/riderDashboard/RiderOrders";
import RiderSetting from "../../components/riderDashboard/RiderSetting";

const RiderDashboard = () => {
  const { isLogin, role } = useAuth();

  const navigate = useNavigate();

  const active = useLocation().state?.activeTab;

  const [activeTab, setActiveTab] = React.useState(
    active || "overview"
  );

  if (!isLogin || role !== "rider") {
    return (
      <div className="min-h-screen bg-orange-50">
        <div className="h-full flex flex-col items-center justify-center py-40">

          <h1 className="text-2xl font-bold">
            Access Denied. Please login as Rider.
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

          <RiderSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

        </div>

        <div className="flex-1 p-8">

          {activeTab === "overview" && (
            <RiderOverview />
          )}

          {activeTab === "orders" && (
            <RiderOrders />
          )}

          {activeTab === "settings" && (
            <RiderSetting />
          )}

        </div>

      </div>

    </div>
  );
};

export default RiderDashboard;