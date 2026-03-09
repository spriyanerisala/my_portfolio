/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const SkillsAdmin = () => {
  const [skills, setSkills] = useState([]);
  const [formData, setFormData] = useState({ name: "", image: null });
  const [editId, setEditId] = useState(null);
   const API_URL= import.meta.env.VITE_BACKEND_URL;

  const fetchSkills = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/skills/get-skills`);
      setSkills(data.skill || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, image: e.target.files?.[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("name", formData.name);
    if (formData.image) payload.append("image", formData.image);

    try {
      if (editId) {
        await axios.put(`${API_URL}/api/skills/update-skill/${editId}`, payload);
      } else {
        await axios.post(`${API_URL}/api/skills/create-skill`, payload);
      }
      setFormData({ name: "", image: null });
      setEditId(null);
      fetchSkills();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (skill) => {
    setEditId(skill._id);
    setFormData({ name: skill.name, image: null });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/skills/delete-skill/${id}`);
      fetchSkills();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Manage Skills</h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-4 mb-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Skill Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded flex-1"
          required
        />
        <input type="file" name="image" onChange={handleChange} className="border p-2 rounded" />
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">
          {editId ? "Update Skill" : "Add Skill"}
        </button>
      </motion.form>

      <div className="grid md:grid-cols-3 gap-4">
        {skills?.map((skill) => (
          <motion.div
            key={skill._id}
            whileHover={{ scale: 1.05 }}
            className="p-4 border rounded flex flex-col items-center"
          >
            <img src={skill.image} alt={skill.name} className="w-20 h-20 mb-2" />
            <p className="font-semibold">{skill.name}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(skill)}
                className="bg-yellow-500 px-2 py-1 rounded text-white"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(skill._id)}
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

export default SkillsAdmin;