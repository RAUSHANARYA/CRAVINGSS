import React from "react";
import {
  MdFastfood,
  MdShoppingBag,
} from "react-icons/md";

const Orders = () => {

  const orders = [];

  return (
    <div className="space-y-8">

      {/* Heading */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            My Orders
          </h1>

          <p className="text-gray-500 mt-2">
            View all your previous orders.
          </p>

        </div>

      </div>

      {/* Orders */}

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        {orders.length === 0 ? (

          <div className="py-20 text-center">

            <MdShoppingBag
              size={80}
              className="mx-auto text-orange-300"
            />

            <h2 className="text-2xl font-bold mt-5">
              No Orders Found
            </h2>

            <p className="text-gray-500 mt-2">
              Looks like you haven't ordered anything yet.
            </p>

          </div>

        ) : (

          <table className="w-full">

            <thead className="bg-orange-500 text-white">

              <tr>

                <th className="p-4 text-left">
                  Food
                </th>

                <th className="p-4">
                  Price
                </th>

                <th className="p-4">
                  Quantity
                </th>

                <th className="p-4">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (

                <tr
                  key={order._id}
                  className="border-b"
                >

                  <td className="p-4 flex items-center gap-3">

                    <MdFastfood size={24} />

                    {order.foodName}

                  </td>

                  <td className="text-center">
                    ₹{order.price}
                  </td>

                  <td className="text-center">
                    {order.quantity}
                  </td>

                  <td className="text-center">

                    <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full">

                      Delivered

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>
  );
};

export default Orders;