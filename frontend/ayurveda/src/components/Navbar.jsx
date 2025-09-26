// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <nav className="bg-herbal text-white p-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">Ayurveda Event</h1>
//       <ul className="flex gap-4">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/events">Events</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/signup">Sign Up</Link></li>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar





// // src/components/Navbar.jsx
// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';

// // You can define a separate CSS file for these custom styles if you prefer,
// // or use Tailwind's arbitrary values.
// const headerStyle = "bg-[#4096ff] text-white h-16 flex items-center px-4"; 
// const contentStyle = "bg-[#0958d9] min-h-[120px] text-white flex items-center justify-center";
// const footerStyle = "bg-[#4096ff] text-white py-4 text-center";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className={headerStyle}>
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold font-serif">Ayurveda Events</h1>
        
//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex gap-4">
//           <li><Link to="/" className="hover:underline">Home</Link></li>
//           <li><Link to="/events" className="hover:underline">Events</Link></li>
//           <li><Link to="/about" className="hover:underline">About</Link></li>
//           <li><Link to="/contact" className="hover:underline">Contact</Link></li>
//           <li><Link to="/login" className="hover:underline">Login</Link></li>
//           <li><Link to="/signup" className="hover:underline">Sign Up</Link></li>
//         </ul>

//         {/* Mobile menu button */}
//         <button
//           className="md:hidden text-white p-2"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             {isMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-16 left-0 w-full bg-[#4096ff] text-white p-4 z-50">
//           <ul className="flex flex-col gap-4">
//             <li><Link to="/" className="block py-2 hover:bg-[#1677ff] rounded" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
//             <li><Link to="/events" className="block py-2 hover:bg-[#1677ff] rounded" onClick={() => setIsMenuOpen(false)}>Events</Link></li>
//             <li><Link to="/about" className="block py-2 hover:bg-[#1677ff] rounded" onClick={() => setIsMenuOpen(false)}>About</Link></li>
//             <li><Link to="/contact" className="block py-2 hover:bg-[#1677ff] rounded" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
//             <li><Link to="/login" className="block py-2 hover:bg-[#1677ff] rounded" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
//             <li><Link to="/signup" className="block py-2 hover:bg-[#1677ff] rounded" onClick={() => setIsMenuOpen(false)}>Sign Up</Link></li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3 ">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-extrabold font-serif tracking-wide">
          🌿 Ayurveda Events
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-200 transition duration-300 p-2.5"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="hover:text-yellow-200 transition duration-300 p-2.5"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-200 transition duration-300 p-2.5"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-200 transition duration-300 p-2.5"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-yellow-200 transition duration-300 p-2.5"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="bg-yellow-400 text-green-900 px-3 py-1 rounded-lg hover:bg-yellow-300 transition duration-300 p-2.5"
            >
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg p-4">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li>
              <Link
                to="/"
                className="block py-2 hover:bg-green-800 rounded px-3 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="block py-2 hover:bg-green-800 rounded px-3 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 hover:bg-green-800 rounded px-3 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 hover:bg-green-800 rounded px-3 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block py-2 hover:bg-green-800 rounded px-3 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="block py-2 bg-yellow-400 text-green-900 rounded-lg px-3 hover:bg-yellow-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
