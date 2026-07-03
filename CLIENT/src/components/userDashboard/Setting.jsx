import React from "react";
import { useAuth } from "../../context/AuthContext";
import {
  MdEdit,
  MdLock,
  MdCameraAlt,
  MdDelete,
} from "react-icons/md";

const Setting = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h1 className="text-3xl font-bold text-gray-800">
          Account Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your profile and account settings.
        </p>

      </div>

      {/* Profile Card */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex flex-col md:flex-row items-center gap-8">

          <img
            src={
              user.photo
                ? user.photo
                : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="profile"
            className="w-36 h-36 rounded-full border-4 border-orange-500 object-cover"
          />

          <div className="flex-1">

            <h2 className="text-3xl font-bold">
              {user.fullName}
            </h2>

            <p className="text-gray-500 mt-2">
              {user.email}
            </p>

            <p className="text-gray-500">
              {user.phone}
            </p>

          </div>

        </div>

      </div>

      {/* Personal Information */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-orange-500 mb-6">
          Personal Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <p className="text-gray-500">
              Full Name
            </p>

            <h3 className="font-semibold text-lg">
              {user.fullName}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Email
            </p>

            <h3 className="font-semibold text-lg">
              {user.email}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Phone
            </p>

            <h3 className="font-semibold text-lg">
              {user.phone}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Gender
            </p>

            <h3 className="font-semibold text-lg">
              {user.gender}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Date of Birth
            </p>

            <h3 className="font-semibold text-lg">
              {new Date(user.dob).toLocaleDateString()}
            </h3>

          </div>

        </div>

      </div>

      {/* Action Buttons */}

      <div className="grid md:grid-cols-2 gap-6">

        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl p-5 flex items-center justify-center gap-3 transition">

          <MdEdit size={24} />

          Edit Profile

        </button>

        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl p-5 flex items-center justify-center gap-3 transition">

          <MdCameraAlt size={24} />

          Upload Profile Photo

        </button>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-2xl p-5 flex items-center justify-center gap-3 transition">

          <MdLock size={24} />

          Change Password

        </button>

        <button className="bg-red-500 hover:bg-red-600 text-white rounded-2xl p-5 flex items-center justify-center gap-3 transition">

          <MdDelete size={24} />

          Delete Account

        </button>

      </div>

    </div>
  );
};

export default Setting;