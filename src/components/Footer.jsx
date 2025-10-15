import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useDarkMode } from "../context/ThemeContext"; // ⬅️ use the same context

const Footer = () => {
  const { darkMode } = useDarkMode(); // get darkMode state from context

  return (
    <footer
      className={`${
        darkMode
          ? "bg-gray-900 border-gray-700 text-gray-400"
          : "bg-gray-100 border-gray-300 text-gray-700"
      } border-t mt-10 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Left - Social icons */}
        <div className="flex gap-5 mb-4 md:mb-0">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:${
              darkMode ? "text-white" : "text-black"
            } transition-colors`}
            title="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:${
              darkMode ? "text-white" : "text-black"
            } transition-colors`}
            title="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:${
              darkMode ? "text-white" : "text-black"
            } transition-colors`}
            title="Facebook"
          >
            <FaFacebook size={20} />
          </a>
        </div>

        {/* Middle - Internal Navigation */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <Link
            to="/about"
            className={`hover:${
              darkMode ? "text-white" : "text-black"
            } transition-colors`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`hover:${
              darkMode ? "text-white" : "text-black"
            } transition-colors`}
          >
            Contact
          </Link>
          <Link
            to="/privacy"
            className={`hover:${
              darkMode ? "text-white" : "text-black"
            } transition-colors`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className={`hover:${
              darkMode ? "text-white" : "text-black"
            } transition-colors`}
          >
            Terms
          </Link>
        </div>

        {/* Right - Copyright */}
        <div
          className={`${
            darkMode ? "text-gray-500" : "text-gray-600"
          } text-xs text-center md:text-right`}
        >
          © {new Date().getFullYear()} CryptoNews. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
