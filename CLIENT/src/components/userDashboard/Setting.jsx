import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  MdEdit,
  MdLock,
  MdCameraAlt,
  MdDelete,
} from "react-icons/md";

import api from "../../config/api.config";
import toast from "react-hot-toast";

const Setting = () => {
const { user, UpdateUser } = useAuth();

if (!user) return null;
const [editingProfile, setEditingProfile] = useState(false);

const [loading, setLoading] = useState(false);
const [profilePic, setProfilePic] = useState(null);

const [profilePreview, setProfilePreview] = useState(null);

const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
});

useEffect(() => {

  setFormData({
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
  });

}, [user]);

const handleChange = (e) => {

  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

};

const handlePhotoChange = (e) => {

  const file = e.target.files[0];

  if (!file) return;

  setProfilePic(file);

  setProfilePreview(URL.createObjectURL(file));

};

const handleSave = async () => {

  try {

    setLoading(true);

    const payload = new FormData();

      payload.append("fullName", formData.fullName);

      payload.append("phone", formData.phone);

      if (profilePic) {
        payload.append("displayPic", profilePic);
      }

      const res = await api.put(
        "/user/edit-profile",
        payload
      );

    UpdateUser(res.data.data);

    toast.success(res.data.message);

    setEditingProfile(false);

  } catch (error) {

    toast.error(error.response?.data?.message);

  } finally {

    setLoading(false);

  }

};

const handleCancel = () => {

  setFormData({
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
  });

  setEditingProfile(false);

};

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
      profilePreview ||
      user?.photo?.url ||
      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    }
    alt="profile"
    className="w-36 h-36 rounded-full border-4 border-orange-500 object-cover"
  />

  {editingProfile && (
    <div className="mt-4">
      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        className="text-sm"
      />
    </div>
  )}

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

          {editingProfile ? (
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            ) : (
              <h3 className="font-semibold text-lg">
                {user.fullName}
              </h3>
            )}

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

                  {editingProfile ? (
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              ) : (
                <h3 className="font-semibold text-lg">
                  {user.phone}
                </h3>
              )}

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

        {!editingProfile ? (

          <button
            onClick={() => setEditingProfile(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl p-5 flex items-center justify-center gap-3 transition"
          >
            <MdEdit size={24} />
            Edit Profile
          </button>

        ) : (

          <>
            <button
              onClick={handleSave}
              disabled={loading}
              className="bg-green-500 hover:bg-green-600 text-white rounded-2xl p-5 flex items-center justify-center gap-3 transition"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>

            <button
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white rounded-2xl p-5 flex items-center justify-center gap-3 transition"
            >
              Cancel
            </button>
          </>

        )}

      </div>

    </div>
  );
};

export default Setting;