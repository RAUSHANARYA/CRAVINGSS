import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      unique:true,
       
    },

    gender: {
      type: String,
      required: true,
    },

    dob: {
      type: Date,
      required: true,
    },

      photo: {
        url: {
          type: String,
          default:
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        },
        publicId: {
          type: String,
          default: null,
        },
      },

password: {
  type: String,
  required: true,
},

userType: {
  type: String,
  enum: ["admin", "customer", "restaurant", "rider"],
  default: "customer",
  required: true,
},
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;