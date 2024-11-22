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
          type="password"
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
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export default TextInput;
