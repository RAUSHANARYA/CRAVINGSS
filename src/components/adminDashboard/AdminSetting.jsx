import React, { useEffect, useState } from "react";
import { MdEdit, MdOutlineAddAPhoto } from "react-icons/md";
import { useAuth } from "../../context/AuthContext";
import api from "../../config/api.config";
import toast from "react-hot-toast";

const AdminSetting = () => {
  const { user, UpdateUser } = useAuth();

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
    if (user) {
      setFormData({
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
      });
    }
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

      const res = await api.put("/user/edit-profile", payload);

      UpdateUser(res.data.data);

      toast.success(res.data.message);

      setEditingProfile(false);

    } catch (error) {
      toast.error(error.response?.data?.message || "Update Failed");
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

    setProfilePreview(null);
    setEditingProfile(false);
  };

  return (
    <div className="bg-white rounded-xl shadow p-8">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-2xl font-bold">
          Profile Settings
        </h2>

        {!editingProfile ? (
          <button
            onClick={() => setEditingProfile(true)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <MdEdit />
            Edit
          </button>
        ) : (
          <div className="flex gap-3">

            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              {loading ? "Saving..." : "Save"}
            </button>

            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>

          </div>
        )}

      </div>

      <div className="flex gap-10">

        <div className="relative">

          <img
            src={
              profilePreview ||
              user?.photo?.url
            }
            className="w-36 h-36 rounded-full object-cover border-4 border-orange-500"
            alt=""
          />

          {editingProfile && (
            <>
              <label
                htmlFor="photo"
                className="absolute bottom-0 right-0 bg-orange-500 p-2 rounded-full cursor-pointer text-white"
              >
                <MdOutlineAddAPhoto />
              </label>

              <input
                id="photo"
                type="file"
                hidden
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </>
          )}

        </div>

        <div className="flex-1 space-y-5">

          <div>

            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              disabled={!editingProfile}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

          </div>

          <div>

            <label>Email</label>

            <input
              value={formData.email}
              disabled
              className="w-full border rounded-lg p-3 bg-gray-100"
            />

          </div>

          <div>

            <label>Phone</label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              disabled={!editingProfile}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminSetting;