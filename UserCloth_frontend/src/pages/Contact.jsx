import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields required");
      return;
    }

    setLoading(true);

    // Fake API delay
    setTimeout(() => {

      setSuccess("Message sent successfully ✅");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

      setLoading(false);

    }, 1500);

  };

  return (

    <div className="min-h-screen bg-gray-100 py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading Animation */}

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Form */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >

            <motion.input
              whileFocus={{ scale: 1.02 }}
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded mb-4 outline-none"
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded mb-4 outline-none"
            />

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className="w-full border p-3 rounded mb-4 outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="bg-black text-white px-6 py-3 rounded w-full"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {success && (
              <p className="text-green-600 mt-4 text-center">
                {success}
              </p>
            )}

          </motion.form>

          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-4"
          >

            <h2 className="text-2xl font-bold mb-4">
              Get in Touch
            </h2>

            <motion.p whileHover={{ x: 5 }} className="text-gray-600">
              📧 support@clothstore.com
            </motion.p>

            <motion.p whileHover={{ x: 5 }} className="text-gray-600">
              📞 +91 9876543210
            </motion.p>

            <motion.p whileHover={{ x: 5 }} className="text-gray-600">
              📍 Jaipur, Rajasthan, India
            </motion.p>

          </motion.div>

        </div>

      </div>

    </div>
  );

};

export default Contact;