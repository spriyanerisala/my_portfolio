/* eslint-disable no-unused-vars */
 /* eslint-disable no-unused-vars */
 import React, { useState } from "react";
 import { motion } from "framer-motion";

 const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const links = ["Home", "Skills", "Projects", "Certifications","Achievements"];

   const handleScroll = (section) => {
    const element = document.getElementById(section.toLowerCase());
     if (element) {
      element.scrollIntoView({ behavior: "smooth" });
     }
   };

   return (
     <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
         <h1 className="text-2xl font-bold text-blue-900 cursor-pointer" onClick={() => handleScroll("home")}>
          Siva Priya N
         </h1>

         <ul className="hidden md:flex space-x-8 text-blue-800 font-semibold">
         {links.map((link, idx) => (
             <motion.li
              key={idx}
               whileHover={{ scale: 1.1, color: "#1E40AF" }} 
               className="cursor-pointer"
               onClick={() => handleScroll(link)}
             >
               {link}
             </motion.li>
           ))}
         </ul>

         {/* Mobile Hamburger */}
         <div className="md:hidden">
           <button onClick={() => setIsOpen(!isOpen)} className="text-blue-800 focus:outline-none">
            {isOpen ? (
               <span className="text-3xl">&times;</span>
             ) : (
               <span className="text-3xl">&#9776;</span>
             )}
           </button>
         </div>
       </div>




       
       {isOpen && (
         <motion.ul
          initial={{ height: 0, opacity: 0 }}
           animate={{ height: "auto", opacity: 1 }}
           transition={{ duration: 0.3 }}
           className="flex flex-col items-center bg-blue-50 text-blue-900 font-semibold space-y-4 py-4 md:hidden"
         >
           {links.map((link, idx) => (
             <li key={idx} className="cursor-pointer" onClick={() => { handleScroll(link); setIsOpen(false); }}>
               {link}
             </li>
           ))}
         </motion.ul>
       )}
     </nav>
   );
 };

export default Navbar;
