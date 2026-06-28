import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
            name="name"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;