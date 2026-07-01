import Contact from "../models/contact.model.js";

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