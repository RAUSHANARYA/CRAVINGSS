export const ContactUsForm = async (req, res, next) => {
  try {
    // Controller Logic

    res.status(200).json({
      success: true,
      message: "Contact us Successfully",
    });

  } catch (error) {
    console.log(error.message);
    next(error);
  }
};