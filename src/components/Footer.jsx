// import React from 'react'

// const Footer = () => {
//   return (
//     <>
//       <footer className="bg-gray-900 border-t border-gray-700 mt-10">
//       <div className="max-w-7xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-6 text-sm">
//         <div>© 2022 CryptoNews</div>
//         <div className="flex gap-4">
//           <a href="#">About</a>
//           <a href="#">Contact Policy</a>
//           <a href="#">Privacy Policy</a>
//           <a href="#">Terms</a>
//         </div>
//         <div className="flex gap-4">
//           <a href="#">Twitter</a>
//           <a href="#">LinkedIn</a>
//           <a href="#">Facebook</a>
//         </div>
//       </div>
//     </footer>
//     </>
//   )
// }

// export default Footer


// import React from "react";
// import { Link } from "react-router-dom";
// import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 border-t border-gray-700 mt-10">
//       <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        
//         {/* Left - Social icons (External links) */}
//         <div className="flex gap-5 mb-4 md:mb-0">
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-white transition-colors"
//             aria-label="Twitter"
//           >
//             <FaTwitter size={20} />
//           </a>
//           <a
//             href="https://www.linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-white transition-colors"
//             aria-label="LinkedIn"
//           >
//             <FaLinkedin size={20} />
//           </a>
//           <a
//             href="https://www.facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-white transition-colors"
//             aria-label="Facebook"
//           >
//             <FaFacebook size={20} />
//           </a>
//         </div>

//         {/* Middle - Internal Navigation */}
//         <div className="flex gap-6 mb-4 md:mb-0">
//           <Link to="/about" className="hover:text-white transition-colors">
//             About
//           </Link>
//           <Link to="/contact" className="hover:text-white transition-colors">
//             Contact
//           </Link>
//           <Link to="/privacy" className="hover:text-white transition-colors">
//             Privacy Policy
//           </Link>
//           <Link to="/terms" className="hover:text-white transition-colors">
//             Terms
//           </Link>
//         </div>

//         {/* Right - Copyright */}
//         <div className="text-gray-500 text-xs">
//           © {new Date().getFullYear()} CryptoNews. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React from "react";
// import { Link } from "react-router-dom";
// import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 border-t border-gray-700 mt-10">
//       <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        
//         {/* Left - Social icons (External links) */}
//         <div className="flex gap-5 mb-4 md:mb-0">
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-white transition-colors"
//             title="Twitter"
//           >
//             <FaTwitter size={20} />
//           </a>
//           <a
//             href="https://www.linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-white transition-colors"
//             title="LinkedIn"
//           >
//             <FaLinkedin size={20} />
//           </a>
//           <a
//             href="https://www.facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-white transition-colors"
//             title="Facebook"
//           >
//             <FaFacebook size={20} />
//           </a>
//         </div>

//         {/* Middle - Internal Navigation */}
//         <div className="flex gap-6 mb-4 md:mb-0">
//           <Link to="/about" className="hover:text-white transition-colors">
//             About
//           </Link>
//           <Link to="/contact" className="hover:text-white transition-colors">
//             Contact
//           </Link>
//           <Link to="/privacy" className="hover:text-white transition-colors">
//             Privacy Policy
//           </Link>
//           <Link to="/terms" className="hover:text-white transition-colors">
//             Terms
//           </Link>
//         </div>

//         {/* Right - Copyright */}
//         <div className="text-gray-500 text-xs text-center md:text-right">
//           © {new Date().getFullYear()} CryptoNews. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useDarkMode } from "../context/ThemeContext"; // ⬅️ use the same context

const Footer = () => {
  const { darkMode } = useDarkMode(); // get darkMode state from context

  return (
    <footer
      className={`${
        darkMode ? "bg-gray-900 border-gray-700 text-gray-400" : "bg-gray-100 border-gray-300 text-gray-700"
      } border-t mt-10 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        
        {/* Left - Social icons */}
        <div className="flex gap-5 mb-4 md:mb-0">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:${darkMode ? "text-white" : "text-black"} transition-colors`}
            title="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:${darkMode ? "text-white" : "text-black"} transition-colors`}
            title="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:${darkMode ? "text-white" : "text-black"} transition-colors`}
            title="Facebook"
          >
            <FaFacebook size={20} />
          </a>
        </div>

        {/* Middle - Internal Navigation */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <Link
            to="/about"
            className={`hover:${darkMode ? "text-white" : "text-black"} transition-colors`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`hover:${darkMode ? "text-white" : "text-black"} transition-colors`}
          >
            Contact
          </Link>
          <Link
            to="/privacy"
            className={`hover:${darkMode ? "text-white" : "text-black"} transition-colors`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className={`hover:${darkMode ? "text-white" : "text-black"} transition-colors`}
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

