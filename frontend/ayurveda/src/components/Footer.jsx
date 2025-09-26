// // const Footer = () => {
// //   return (
// //     <footer className="bg-earthy text-white p-4 text-center">
// //       <p>© 2025 Ayurveda Wellness Summit</p>
// //       <div className="mt-2 flex justify-center gap-4">
// //         <a href="#" className="hover:underline">Facebook</a>
// //         <a href="#" className="hover:underline">Instagram</a>
// //         <a href="#" className="hover:underline">Twitter</a>
// //       </div>
// //     </footer>
// //   )
// // }

// // export default Footer





// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
//           {/* Brand */}
//           <div>
//             <h2 className="text-2xl font-bold text-white tracking-wide">
//               Ayurveda Events
//             </h2>
//             <p className="mt-3 text-sm text-gray-400">
//               Discover the wisdom of Ayurveda with modern wellness practices.
//               Join us in our journey of holistic healing 🌿
//             </p>
//           </div>

//           {/* About */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">About</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-green-400 transition">Our Story</a></li>
//               <li><a href="#" className="hover:text-green-400 transition">Team</a></li>
//               <li><a href="#" className="hover:text-green-400 transition">Careers</a></li>
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><a href="/" className="hover:text-green-400 transition">Home</a></li>
//               <li><a href="/events" className="hover:text-green-400 transition">Events</a></li>
//               <li><a href="/about" className="hover:text-green-400 transition">About</a></li>
//               <li><a href="/contact" className="hover:text-green-400 transition">Contact</a></li>
//             </ul>
//           </div>

//           {/* Legal */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-green-400 transition">Privacy Policy</a></li>
//               <li><a href="#" className="hover:text-green-400 transition">Terms & Conditions</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row items-center justify-between mt-6 text-sm text-gray-400">
//           <p>© {new Date().getFullYear()} Ayurveda Events. All Rights Reserved.</p>
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             <a href="#" className="hover:text-green-400 transition">Facebook</a>
//             <a href="#" className="hover:text-green-400 transition">Instagram</a>
//             <a href="#" className="hover:text-green-400 transition">Twitter</a>
//             <a href="#" className="hover:text-green-400 transition">GitHub</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }








import { useState, useEffect } from "react";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 200); // show after 200px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h1 className="text-2xl font-bold text-white">Ayurveda Events</h1>
            <p className="mt-3 text-gray-400 text-sm">
              Blending ancient wisdom with modern wellness.
            </p>
          </div>

          {/* About */}
          <div>
            <h2 className="font-semibold text-white mb-3">About</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">Our Story</a></li>
              <li><a href="#" className="hover:text-green-400">Team</a></li>
              <li><a href="#" className="hover:text-green-400">Careers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="font-semibold text-white mb-3">Resources</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">Blog</a></li>
              <li><a href="#" className="hover:text-green-400">FAQ</a></li>
              <li><a href="#" className="hover:text-green-400">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="font-semibold text-white mb-3">Legal</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ayurveda Events. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Facebook */}
            <a href="#" className="hover:text-green-400 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 17 22 12"></path>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="hover:text-green-400 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2c1.7 0 3 1.3 3 3s-1.3 3-3 3a3 3 0 010-6zm4.8-.9a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"></path>
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" className="hover:text-green-400 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.2 4.2 0 001.84-2.31 8.2 8.2 0 01-2.63 1 4.1 4.1 0 00-7 3.74A11.7 11.7 0 013 5.1a4.1 4.1 0 001.28 5.5 4.1 4.1 0 01-1.86-.5v.05c0 2 1.5 3.7 3.4 4.1a4.1 4.1 0 01-1.85.07 4.1 4.1 0 003.83 2.85A8.3 8.3 0 013 19.6a11.7 11.7 0 006.29 1.8c7.55 0 11.68-6.3 11.68-11.76 0-.18-.01-.35-.02-.53A8.4 8.4 0 0022.46 6z"></path>
              </svg>
            </a>

            {/* GitHub (fixed path) */}
            <a href="#" className="hover:text-green-400 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.6 2 12.3c0 4.5 2.87 8.3 6.84 9.64.5.1.68-.2.68-.5v-1.8c-2.78.6-3.37-1.4-3.37-1.4-.45-1.2-1.1-1.5-1.1-1.5-.9-.6.07-.6.07-.6 1 .1 1.54 1 1.54 1 .9 1.6 2.37 1.1 2.94.8.1-.7.35-1.1.64-1.4-2.22-.3-4.55-1.1-4.55-5a3.9 3.9 0 011-2.7 3.6 3.6 0 01.1-2.6s.8-.3 2.7 1a9.3 9.3 0 014.9 0c1.9-1.3 2.7-1 2.7-1 .5 1 .2 2.1.1 2.6a3.9 3.9 0 011 2.7c0 3.9-2.3 4.7-4.6 5 .36.3.7.9.7 1.8v2.7c0 .3.18.6.68.5A10.3 10.3 0 0022 12.3C22 6.6 17.5 2 12 2z"></path>
              </svg>
            </a>

            {/* Dribbble */}
            <a href="#" className="hover:text-green-400 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.4 4.6a8 8 0 012 4.8c-.3-.1-3.2-.7-6.2-.3-.2-.5-.5-1.2-.8-1.7 3.2-1.3 5-2.8 5-2.8zM12 4a8 8 0 014.7 1.5s-1.7 1.5-4.7 2.6A37.8 37.8 0 0012 4zM8.6 4.7a8.2 8.2 0 013.2-.7c.2.5.6 1.6 1 3-2.7.8-6.3 1-6.3 1s.8-1.9 2.1-3.3zm-3 4.2a8 8 0 013.3-2.7 21.7 21.7 0 00-1.6 4.8c-1.4-.1-2.6-.2-3.6-.3.1-.6.4-1.3.9-1.8zM4 12c0-.2 0-.5.1-.7 1.2.1 2.6.2 4 .4-.1.4-.2.8-.3 1.3-1.5.5-2.8 1.5-3.7 2.8A8 8 0 014 12zm2.7 5a7 7 0 012.7-2.1c.4 1.3.9 2.7 1.6 4a8 8 0 01-4.3-1.9zm6 2.1c-.5-.9-1.1-2.2-1.6-3.7 1.6-.3 3.5-.2 5.6.5a8 8 0 01-4 3.2zM14 13a23 23 0 00-5.2-.3c.2-.6.3-1.1.4-1.6 2.8-.4 6.6.2 6.8.2-.6.7-1.2 1.1-2 1.7zm1.5 4a28 28 0 00-5.7-.6c.3.9.7 1.8 1.2 2.7a8 8 0 004.5-2.1z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button with animation */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition transform animate-fade-in"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      {/* Animation styles */}
      <style>{`
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeInScale 0.3s ease-in-out;
        }
      `}</style>
    </footer>
  );
}
