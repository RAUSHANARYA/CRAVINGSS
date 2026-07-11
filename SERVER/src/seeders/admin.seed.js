import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const AdminUser = {
  fullName: "Admin",
  email: "admin@cravings.com",
  password: await bcrypt.hash("Admin@123", 10),
  dob: "2000-01-01",
  gender: "Other",
  phone: "9999999998",

  userType: "admin",

  photo: {
    url: "https://placehold.co/600x400?text=Admin",
    publicId: null,
  },
};

const adminSeed = async () => {
  try {
    const existingAdmin = await User.findOne({
      email: AdminUser.email,
    });

    if (existingAdmin) {
      await existingAdmin.deleteOne();
    }

    await User.create(AdminUser);

    console.log("✅ Admin Created Successfully");
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export default adminSeed;