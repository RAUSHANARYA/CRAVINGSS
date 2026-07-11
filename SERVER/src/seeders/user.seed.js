import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const UserData = [
  {
    fullName: "Restaurant",
    email: "restaurant@gmail.com",
    password: await bcrypt.hash("Restaurant@123", 10),
    dob: "2000-01-01",
    gender: "Other",
    phone: "9876543210",

    userType: "restaurant",

    photo: {
      url: "https://placehold.co/600x400?text=R",
      publicId: null,
    },
  },

  {
    fullName: "Customer",
    email: "customer@gmail.com",
    password: await bcrypt.hash("Customer@123", 10),
    dob: "2000-01-01",
    gender: "Other",
    phone: "9876543211",

    userType: "customer",

    photo: {
      url: "https://placehold.co/600x400?text=C",
      publicId: null,
    },
  },

  {
    fullName: "Rider",
    email: "rider@gmail.com",
    password: await bcrypt.hash("Rider@123", 10),
    dob: "2000-01-01",
    gender: "Other",
    phone: "9876543220",

    userType: "rider",

    photo: {
      url: "https://placehold.co/600x400?text=R",
      publicId: null,
    },
  },
];

const userSeed = async () => {
  try {
    for (const user of UserData) {

      const existingUser = await User.findOne({
        email: user.email,
      });

      if (existingUser) {
        await existingUser.deleteOne();
      }

      await User.create(user);

      console.log(`${user.userType} Created`);
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export default userSeed;