"use client";

import React from "react";

interface ButtonProps {
  buttonContent: string;
  icon?: JSX.Element;
  onClick?: () => void; // Adicionando a função de clique
  disabled?: boolean; // Adicionando a funcionalidade de desabilitar
}

const PrimaryButton: React.FC<ButtonProps> = ({
  buttonContent,
  icon,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick} // Passando a função de clique
      disabled={disabled} // Configurando o estado de desabilitado
      className={`w-full flex justify-between items-center px-6 py-2 font-semibold rounded-lg shadow-md transition duration-200 ease-in-out ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
      }`}
    >
      <span className="mx-auto">{buttonContent}</span>
      {icon && <span className="ml-auto h-5 w-5">{icon}</span>}
    </button>
  );
};

export default PrimaryButton;
