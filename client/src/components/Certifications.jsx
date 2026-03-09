/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Certifications = () => {
  const [certs, setCerts] = useState([]);
 const API_URL= import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/certs/get-certs`);
        setCerts(data.certifications || []); // fallback to empty array
      } catch (error) {
        console.log(error);
        setCerts([]); // fallback if error occurs
      }
    };
    fetchCerts();
  }, []);

  return (
    <div className="px-10 py-20 bg-white">
      <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Certifications</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {certs?.map((cert) => (
          <motion.div
            key={cert._id}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 p-6 rounded-lg shadow-md"
          >
            <img src={cert.image} alt={cert.name} className="w-full h-48 object-cover rounded" />
            <h3 className="mt-4 text-xl font-bold text-blue-800">{cert.name}</h3>
            <p className="mt-2 text-blue-700">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;