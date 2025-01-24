import React, { useState } from 'react';

function Taskcard({ task, onUpdate, onDelete }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <li className="p-3 bg-white shadow rounded-md flex justify-between items-center relative">
      <span className="text-gray-800">{task?.title || "Untitled Task"}</span>

      {/* Three-dot Button */}
      <button
        onClick={toggleMenu}
        className="text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        &#x22EE; {/* Unicode for three vertical dots */}
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-white border border-gray-300 shadow-lg rounded-md z-10">
          <button
            onClick={onUpdate}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Update
          </button>
          <button
            onClick={onDelete}
            className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-100"
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

export default Taskcard;
