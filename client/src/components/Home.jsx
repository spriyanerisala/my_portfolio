/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/my_pic_for_portfolio.jpeg";

const Home = () => {
  return (
<div className="flex flex-col-reverse md:flex-row min-h-screen bg-white  dark:bg-gray-900 ...">
      
      {/* Text Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center lg:top-50 md:text-left relative top-10  lg:left-20"
      >
        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white">
          Nerisala Siva Priya
        </h1> 

        {/* Role */}
        <p className="mt-4 text-lg md:text-xl text-blue-700 dark:text-gray-300">
          Full Stack Developer | MERN Stack | MYSQL
        </p>

        {/* Description */}
        <p className="mt-6 text-blue-800 dark:text-gray-400">
          Passionate about building interactive web applications and bringing
          ideas to life with modern technologies.
        </p>

        {/* Leetcode */}
        <p className="mt-6 text-blue-800 dark:text-gray-400">
          Solved{" "}
          <span className="text-blue-950 dark:text-white font-bold text-lg">
            90+
          </span>{" "}
          problems in Leetcode
        </p>

        {/* Social Links */}
        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
          
          <a
            href="https://www.linkedin.com/in/siva-priya-nerisala-304aa92ab"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/spriyanerisala"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            GitHub
          </a>

          <a
            href="https://leetcode.com/u/WrAEWBsWV8/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            LeetCode
          </a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center mb-8 md:mb-0"
      >
        <img
          src={myPhoto}
          alt="Priya"
          className="rounded-full lg:top-50 w-56 h-56 md:w-64 md:h-64  relative sm:top-30  top-30 border-4 border-blue-500"
        />
      </motion.div>
    </div>
  );
};

export default Home;