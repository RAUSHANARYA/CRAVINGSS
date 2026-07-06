import Contact from "../models/contact.model.js";
import User from "../models/user.model.js";
import cloudinary from "../config/cloudinary.config.js";

// Contact Us
// Contact Us
export const ContactUs = async (req, res, next) => {
  try {
    const { fullName, email, subject, message } = req.body;

    // Validation
    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const contact = await Contact.create({
      fullName,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      contact,
    });

  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

// Get All Contact Messages
export const GetAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      total: contacts.length,
      contacts,
    });

  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
export const EditUserProfile = async (req, res, next) => {
  try {
    const { fullName, phone } = req.body;
    const newPhoto = req.file;

    if (!fullName || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findById(req.user._id);

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
if (newPhoto) {

  // Old Photo Delete
  if (existingUser.photo.publicId) {

    await cloudinary.uploader.destroy(
      existingUser.photo.publicId
    );

  }

  // Buffer -> Base64
  const b64 = Buffer.from(newPhoto.buffer).toString("base64");

  const dataURI = `data:${newPhoto.mimetype};base64,${b64}`;

  // Upload
  const result = await cloudinary.uploader.upload(dataURI, {
    folder: "Cravings/profile",
    width: 500,
    height: 500,
    crop: "fill",
  });

  existingUser.photo = {
    url: result.secure_url,
    publicId: result.public_id,
  };

}
    existingUser.fullName = fullName;
    existingUser.phone = phone;

    await existingUser.save();

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      data: existingUser,
    });

  } catch (error) {
    next(error);
  }
};
