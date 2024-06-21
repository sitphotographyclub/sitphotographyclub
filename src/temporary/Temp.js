import React from "react";
import "./Tempcss.css";
import logo from "./logo.jpg";
import fb from "./fb.png";
import insta from "./insta.png";
import link from "./link.png";
export default function Temp() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 main-bg">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <img
          src={logo}
          alt="Logo"
          class="mb-8 h-40"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">
          Site is under maintainence  
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
          Something Great Is Coming Up. Stay tuned!
        </p>
        <div className="social">
          <a href="https://www.facebook.com/sitphotographyclubofficial">
            <img className="social-icon" src={fb}></img>
          </a>
          <a href="https://www.instagram.com/sitphotoclub">
            <img className="social-icon" src={insta}></img>
          </a>
          <a href="https://www.linkedin.com/company/sit-photography-club/">
            <img className="social-icon" src={link}></img>
          </a>
        </div>
        <div className="flex space-x-4">
          <a
            href="mailto:officialsitphotographyclub@gmail.com"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Contact Us
          </a>
          <a
            href="https://sitphotography.club"
            className="border-2 border-gray-800 text-black font-bold py-3 px-6 rounded dark:text-white dark:border-white"
          >
            Reload
          </a>
        </div>
      </div>
    </div>
  );
}
