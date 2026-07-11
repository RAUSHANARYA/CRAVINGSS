import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const RestaurantSidebar = ({ activeTab, setActiveTab }) => {

  const mainTabs = [
    {
      name: "Overview",
      value: "overview",
      icon: <MdDashboard />,
    },
    {
      name: "Orders",
      value: "orders",
      icon: <FaShoppingCart />,
    },
  ];

  const settingsTab = {
    name: "Settings",
    value: "settings",
    icon: <IoMdSettings />,
  };

  const renderTab = (tab) => (
    <li
      key={tab.value}
      onClick={() => setActiveTab(tab.value)}
      className={`cursor-pointer p-3 rounded-lg flex items-center gap-3 transition

      ${
        activeTab === tab.value
          ? "bg-orange-500 text-white font-semibold"
          : "text-gray-700 hover:bg-orange-100"
      }`}
    >
      {tab.icon}
      {tab.name}
    </li>
  );

  return (
    <div className="bg-white shadow-lg rounded-xl h-full p-5 flex flex-col">

      <h2 className="text-2xl font-bold text-orange-500 mb-8">
        Restaurant Panel
      </h2>

      <ul className="space-y-3 flex-1">
        {mainTabs.map((tab) => renderTab(tab))}
      </ul>

      <ul className="border-t pt-4">
        {renderTab(settingsTab)}
      </ul>

    </div>
  );
};

export default RestaurantSidebar;