import React from "react";
import { Search } from "lucide-react";

const Header: React.FC = () => {
  const categories = [
    "Rooms",
    "Mansion",
    "Countryside",
    "Penthouse",
    "Beachfront",
    "Villa",
  ];

  return (
     <header className="w-full border-b bg-white shadow-sm">
      {/* Top Nav */}
      <div className="flex items-center justify-between px-4 lg:px-10 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          Stay<span className="text-gray-800">Finder</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-1/2 bg-gray-100 px-3 py-2 rounded-full">
          <Search className="w-5 h-5 text-gray-600" />
          <input
            type="text"
            placeholder="Search for destinations..."
            className="ml-2 w-full bg-transparent outline-none text-sm"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium hover:text-blue-600">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-full hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto px-4 lg:px-10 py-3 border-t bg-gray-50">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 text-sm bg-white rounded-full border hover:bg-blue-100 whitespace-nowrap"
          >
            {cat}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
