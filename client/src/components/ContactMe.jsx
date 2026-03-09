/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");
 const API_URL= import.meta.env.VITE_BACKEND_URL;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      await axios.post(`${API_URL}/api/contact/create-contact`, formData);
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(()=> setSuccess(""),300);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="contact" className="px-10 py-20 bg-blue-50">
      <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Contact Me</h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto flex flex-col gap-6 bg-white p-8 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-blue-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-blue-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="border border-blue-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-700 text-white py-3 rounded font-semibold hover:bg-blue-800 transition"
        >
          Send Message
        </button>
        {success && <p className="text-green-600 font-medium mt-2">{success}</p>}
      </motion.form>
    </div>
  );
};

export default ContactMe;