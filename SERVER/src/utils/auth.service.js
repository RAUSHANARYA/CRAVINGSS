import jwt from "jsonwebtoken";
export const genToken = async (user, res) => {
  try {
    const payload = { id: user_id };
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("CravingToken", token, {
      maxAge: 1000 * 3600 * 24,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
  } catch (error) {}
};
