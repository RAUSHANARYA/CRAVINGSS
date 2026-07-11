import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import RestaurantSidebar from "../../components/restaurantDashboard/RestaurantSidebar";
import RestaurantOverview from "../../components/restaurantDashboard/RestaurantOverview";
import RestaurantOrders from "../../components/restaurantDashboard/RestaurantOrders";
import RestaurantSetting from "../../components/restaurantDashboard/RestaurantSetting";

const RestaurantDashboard = () => {
  const { isLogin, role } = useAuth();

  const navigate = useNavigate();

  const active = useLocation().state?.activeTab;

  const [activeTab, setActiveTab] = React.useState(
    active || "overview"
  );

  if (!isLogin || role !== "restaurant") {
    return (
      <div className="h-[92vh] bg-orange-50">
        <div className="h-full flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">
            Access Denied. Please login as Restaurant.
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
          <RestaurantSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        <div className="flex-1 p-8">

          {activeTab === "overview" && (
            <RestaurantOverview />
          )}

          {activeTab === "orders" && (
            <RestaurantOrders />
          )}

          {activeTab === "settings" && (
            <RestaurantSetting />
          )}

        </div>

      </div>
    </div>
  );
};

export default RestaurantDashboard;