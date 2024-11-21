"use client";

import React from 'react';

interface LabelProps {
  label: string;
  placeholder?: string;
}

const TextInput = ({ label, placeholder }: LabelProps) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-gray-600 mb-1">{label}</label>
      
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full py-2 pl-10 pr-4 border border-black rounded-lg shadow-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black transition duration-200"
        />
        
        {/* Ícone dentro do campo de entrada */}
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default TextInput;
