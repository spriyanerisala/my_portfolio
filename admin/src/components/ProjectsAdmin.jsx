/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ProjectsAdmin = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    stackUsed: "",
    liveDemo: "",
    githubLink: "",
    image: null,
  });
  const [editId, setEditId] = useState(null);
 const API_URL= import.meta.env.VITE_BACKEND_URL;

  
  const fetchProjects = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/projects/get-projects`);
      setProjects(data.projects || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjects();
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
    payload.append("stackUsed", formData.stackUsed);
    payload.append("liveDemo", formData.liveDemo);
    payload.append("githubLink", formData.githubLink);
    if (formData.image) payload.append("image", formData.image);

    try {
      if (editId) {
        await axios.put(`${API_URL}/api/projects/update-project/${editId}`, payload);
      } else {
        await axios.post(`${API_URL}/api/projects/create-project`, payload);
      }
      setFormData({
        name: "",
        description: "",
        stackUsed: "",
        liveDemo: "",
        githubLink: "",
        image: null,
      });
      setEditId(null);
      fetchProjects();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (project) => {
    setEditId(project._id);
    setFormData({
      name: project.name,
      description: project.description,
      stackUsed: project.stackUsed.join(", "),
      liveDemo: project.liveDemo,
      githubLink: project.githubLink,
      image: null,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/projects/delete-project/${id}`);
      fetchProjects();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Manage Projects</h2>

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
          placeholder="Project Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="stackUsed"
          placeholder="Stack Used (comma separated)"
          value={formData.stackUsed}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="liveDemo"
          placeholder="Live Demo Link"
          value={formData.liveDemo}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="githubLink"
          placeholder="Github Link"
          value={formData.githubLink}
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
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded col-span-2"
        >
          {editId ? "Update Project" : "Add Project"}
        </button>
      </motion.form>

      <div className="grid md:grid-cols-3 gap-4">
        {projects?.map((project) => (
          <motion.div
            key={project._id}
            whileHover={{ scale: 1.05 }}
            className="p-4 border rounded"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-32 object-cover mb-2 rounded"
              />
            )}
            <p className="font-bold">{project.name}</p>
            <p className="text-sm mb-1">{project.description}</p>
            <p className="text-sm font-semibold">Stack: {project.stackUsed.join(", ")}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(project)}
                className="bg-yellow-500 px-2 py-1 rounded text-white"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project._id)}
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

export default ProjectsAdmin;