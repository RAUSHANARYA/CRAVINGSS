import React from "react";
import { useAuth } from "../../context/AuthContext";
import {
  MdFastfood,
  MdFavorite,
  MdShoppingCart,
  MdStar,
} from "react-icons/md";

const Overview = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">

      {/* Welcome Card */}

      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h1 className="text-4xl font-bold">
              Welcome Back, {user.fullName} 👋
            </h1>

            <p className="mt-3 text-orange-100">
              Manage your account, orders and wishlist from your dashboard.
            </p>

          </div>

          <img
            src={
              user?.photo?.url ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white object-cover"
          />

        </div>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

          <MdFastfood
            size={40}
            className="mx-auto text-orange-500"
          />

          <h2 className="text-3xl font-bold mt-4">
            0
          </h2>

          <p className="text-gray-500">
            Total Orders
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

          <MdShoppingCart
            size={40}
            className="mx-auto text-orange-500"
          />

          <h2 className="text-3xl font-bold mt-4">
            0
          </h2>

          <p className="text-gray-500">
            Cart Items
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

          <MdFavorite
            size={40}
            className="mx-auto text-red-500"
          />

          <h2 className="text-3xl font-bold mt-4">
            0
          </h2>

          <p className="text-gray-500">
            Wishlist
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

          <MdStar
            size={40}
            className="mx-auto text-yellow-500"
          />

          <h2 className="text-3xl font-bold mt-4">
            Premium
          </h2>

          <p className="text-gray-500">
            Membership
          </p>

        </div>

      </div>

      {/* User Information */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-orange-500 mb-6">
          Profile Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500">Full Name</p>

            <h3 className="font-semibold text-lg">
              {user.fullName}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Email</p>

            <h3 className="font-semibold text-lg">
              {user.email}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Phone</p>

            <h3 className="font-semibold text-lg">
              {user.phone}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Gender</p>

            <h3 className="font-semibold text-lg">
              {user.gender}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Date of Birth</p>

            <h3 className="font-semibold text-lg">
              {new Date(user.dob).toLocaleDateString()}
            </h3>
          </div>

        </div>

      </div>

      {/* Recent Orders */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-orange-500 mb-6">
          Recent Orders
        </h2>

        <div className="text-center py-10 text-gray-500">

          <MdFastfood
            size={70}
            className="mx-auto text-orange-300"
          />

          <h3 className="text-xl font-semibold mt-4">
            No Orders Yet
          </h3>

          <p>
            Your recent orders will appear here.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Overview;