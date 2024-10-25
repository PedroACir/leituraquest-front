"use client";

import React from 'react';

interface ButtonProps {
  buttonContent: string;
  icon?: JSX.Element;
}

const PrimaryButton = ({ buttonContent, icon }: ButtonProps) => {
  return (
    <button className="w-full flex justify-between items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-200 ease-in-out">
      <span className="mx-auto">{buttonContent}</span>
      {icon && <span className="ml-auto h-5 w-5">{icon}</span>}
    </button>
  );
};

export default PrimaryButton;
