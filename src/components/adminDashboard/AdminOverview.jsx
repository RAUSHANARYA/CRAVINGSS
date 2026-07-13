import React from "react";

const AdminOverview = () => {
  return (
    <div className="overflow-y-auto h-full">

      <h2 className="text-2xl font-bold mb-6">
        Admin Overview
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-6">

        <div className="bg-orange-100 p-4 rounded-lg shadow">
          <p className="text-gray-600 text-sm">
            Total Orders
          </p>

          <p className="text-3xl font-bold">
            12
          </p>
        </div>

        <div className="bg-orange-100 p-4 rounded-lg shadow">
          <p className="text-gray-600 text-sm">
            Total Revenue
          </p>

          <p className="text-3xl font-bold">
            ₹2450
          </p>
        </div>

      </div>

      <div className="bg-white shadow rounded-lg p-5">

        <h3 className="font-semibold mb-3">
          Recent Orders
        </h3>

        <p className="text-gray-500">
          No recent orders
        </p>

      </div>

    </div>
  );
};

export default AdminOverview;