/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/my_portfolio_pic.jpg";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-10">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <h1 className="text-5xl font-bold text-blue-900">Nerisala Siva Priya</h1>
        <p className="mt-4 text-xl text-blue-700">Full Stack Developer | MERN Stack</p>
        <p className="mt-6 text-blue-800">
          Passionate about building interactive web applications and bringing ideas to life with modern technologies.
        </p>

        {/* Social Links */}
        <div className="mt-6 flex gap-4">
          <a
            href="https://www.linkedin.com/in/siva-priya-nerisala-304aa92ab"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-800 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/spriyanerisala"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-800 transition-colors duration-300" 
             
          >
            GitHub
          </a>
          
          <a
            href="https://leetcode.com/u/WrAEWBsWV8/"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-800 transition-colors duration-300" 
             
          >
            LeetCode
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <img
          src={myPhoto}
          alt="Priya"
          className="rounded-full w-64 h-64 object-cover border-4 border-blue-500"
        />
      </motion.div>
    </div>
  );
};

export default Home;