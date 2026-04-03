import React from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Certifications from "./components/Certifications";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import Achievements from './components/Achievements';
function App() {
  return (
   <div className="bg-white dark:bg-gray-900 text-blue-800 dark:text-gray-300 min-h-screen w-full transition-colors duration-300">
      <Navbar />
       <section id="home"><Home /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      {/* <section id="certifications"><Certifications /></section> */}
      <section id="achievements"><Achievements /></section>
      <section id="contact"><ContactMe /></section>
      <Footer/>
    </div>
  );
}


export default App;