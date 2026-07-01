import { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/api.config";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      console.log(formData);

      const res = await api.post("/public/contact-us", formData);

      toast.success(res.data.message);

      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-12 bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">

        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            placeholder="Subject"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            placeholder="Your Message"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default ContactUs;