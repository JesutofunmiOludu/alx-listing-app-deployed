// components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>

        {/* Middle */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-200 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-200 transition">Terms</a>
          <a href="#" className="hover:text-gray-200 transition">Support</a>
        </div>

        {/* Right (Social Icons or Links) */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-200 transition">Twitter</a>
          <a href="#" className="hover:text-gray-200 transition">LinkedIn</a>
          <a href="#" className="hover:text-gray-200 transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
