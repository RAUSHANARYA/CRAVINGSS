import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const UserDashboard = () => {
 const { user } = useAuth();

if (!user) {
  return <Navigate to="/login" />;
}

  return (
    <div className="min-h-screen bg-orange-50 py-10 px-5">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl shadow-xl p-10 text-white">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <img
              src={
                user.photo
                  ? user.photo
                  : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-white object-cover shadow-lg"
            />

            <div>

              <h1 className="text-4xl font-bold">
                Welcome, {user.fullName} 
              </h1>

              <p className="mt-3 text-orange-100 text-lg">
                Glad to see you again.
              </p>

            </div>

          </div>

        </div>

        {/* Profile Details */}

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-lg font-semibold text-orange-500">
              Email Address
            </h2>

            <p className="mt-2 text-gray-700">
              {user.email}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-lg font-semibold text-orange-500">
              Phone Number
            </h2>

            <p className="mt-2 text-gray-700">
              {user.phone}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-lg font-semibold text-orange-500">
              Gender
            </h2>

            <p className="mt-2 text-gray-700">
              {user.gender}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-lg font-semibold text-orange-500">
              Date of Birth
            </h2>

            <p className="mt-2 text-gray-700">
              {new Date(user.dob).toLocaleDateString()}
            </p>

          </div>

        </div>

        {/* Account Summary */}

        <div className="mt-10 bg-white rounded-3xl shadow-md p-8">

          <h2 className="text-2xl font-bold text-orange-500 mb-6">
            Account Summary
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-orange-100 rounded-xl p-5 text-center">

              <h3 className="text-3xl font-bold text-orange-600">
                0
              </h3>

              <p className="text-gray-600 mt-2">
                Orders
              </p>

            </div>

            <div className="bg-orange-100 rounded-xl p-5 text-center">

              <h3 className="text-3xl font-bold text-orange-600">
                0
              </h3>

              <p className="text-gray-600 mt-2">
                Cart Items
              </p>

            </div>

            <div className="bg-orange-100 rounded-xl p-5 text-center">

              <h3 className="text-3xl font-bold text-orange-600">
                0
              </h3>

              <p className="text-gray-600 mt-2">
                Favorites
              </p>

            </div>

            <div className="bg-orange-100 rounded-xl p-5 text-center">

              <h3 className="text-3xl font-bold text-orange-600">
                ⭐
              </h3>

              <p className="text-gray-600 mt-2">
                Premium User
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default UserDashboard;