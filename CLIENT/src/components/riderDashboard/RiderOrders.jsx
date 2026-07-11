import React from "react";

const RiderOrders = () => {
  return (
    <div className="overflow-y-auto h-full">

      <h2 className="text-2xl font-bold mb-6">
        Rider Orders
      </h2>

      <div className="bg-white shadow rounded-lg p-5">

        <table className="w-full">

          <thead>
            <tr className="border-b">

              <th className="text-left py-3">Order ID</th>
              <th className="text-left py-3">Restaurant</th>
              <th className="text-left py-3">Amount</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">Date</th>

            </tr>
          </thead>

          <tbody>
            <tr>

              <td
                colSpan="5"
                className="text-center py-10 text-gray-500"
              >
                No Orders Found
              </td>

            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default RiderOrders;