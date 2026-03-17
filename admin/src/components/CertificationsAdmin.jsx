/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
// CertificationsAdmin.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const CertificationsAdmin = () => {
  const [certs, setCerts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });
  const [editId, setEditId] = useState(null);
   const API_URL= import.meta.env.VITE_BACKEND_URL;

  const fetchCerts = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/certs/get-certs`);
      setCerts(data.certifications || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCerts();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("description", formData.description);
    if (formData.image) payload.append("image", formData.image);

    try {
      if (editId) { 
        await axios.put(`${API_URL}/api/certs/update-cert/${editId}`, payload);
      } else {
        await axios.post(`${API_URL}/api/certs/create-cert`, payload); 
       
      }
      setFormData({ name: "", description: "", image: null });
      setEditId(null);
      fetchCerts();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (cert) => {
    setEditId(cert._id);
    setFormData({
      name: cert.name,
      description: cert.description,
      image: null,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/certs/delete-cert/${id}`);
      fetchCerts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Manage Certifications</h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Certification Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded col-span-2"
        >
          {editId ? "Update Certification" : "Add Certification"}
        </button>
      </motion.form>

      <div className="grid md:grid-cols-3 gap-4">
        {certs?.map((cert) => (
          <motion.div
            key={cert._id}
            whileHover={{ scale: 1.05 }}
            className="p-4 border rounded bg-white shadow-md"
          >
            {cert.image && (
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-32 object-cover mb-2 rounded"
              />
            )}
            <p className="font-bold">{cert.name}</p>
            <p className="text-sm mb-1">{cert.description}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(cert)}
                className="bg-yellow-500 px-2 py-1 rounded text-white"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(cert._id)}
                className="bg-red-600 px-2 py-1 rounded text-white"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsAdmin;