"use client";

import React, { useState } from "react";

const HomePage = () => {
  const [avatar, setAvatar] = useState<string>("/images/default-avatar.png"); // Caminho inicial do avatar
  const [showNotifications, setShowNotifications] = useState<boolean>(false); // Controle para exibir notificações
  const [currentIndexContinue, setCurrentIndexContinue] = useState<number>(0); // Índice do carrossel "Continuar Lendo"
  const [currentIndexSuggestions, setCurrentIndexSuggestions] = useState<number>(0); // Índice do carrossel "Sugestões de Livros"
  const booksPerPage = 4; // Quantidade de livros por vez

  // Lista de notificações
  const notifications = [
    "Você ganhou 50 QuestPoints!",
    "Novo livro disponível no acervo.",
    "Finalize sua leitura para ganhar recompensas.",
  ]; // Notificações de exemplo

  // Livros para "Continuar Lendo"
  const continueReadingBooks = [
    { id: 1, title: "1984", author: "George Orwell", cover: "/images/defaultImg.webp", category: "Ficção Científica" },
    { id: 2, title: "Sherlock Holmes", author: "Arthur Conan Doyle", cover: "/images/defaultImg.webp", category: "Mistério" },
    { id: 3, title: "O Hobbit", author: "J.R.R. Tolkien", cover: "/images/defaultImg.webp", category: "Fantasia" },
    { id: 4, title: "A Revolução dos Bichos", author: "George Orwell", cover: "/images/defaultImg.webp", category: "Fábula" },
    { id: 5, title: "Harry Potter e a Pedra Filosofal", author: "J.K. Rowling", cover: "/images/defaultImg.webp", category: "Fantasia" },
  ];

  // Livros para "Sugestões de Livros"
  const suggestedBooks = [
    { id: 6, title: "Percy Jackson e o Ladrão de Raios", author: "Rick Riordan", cover: "/images/defaultImg.webp", category: "Aventura" },
    { id: 7, title: "Dom Quixote", author: "Miguel de Cervantes", cover: "/images/defaultImg.webp", category: "Clássico" },
    { id: 8, title: "O Pequeno Príncipe", author: "Antoine de Saint-Exupéry", cover: "/images/defaultImg.webp", category: "Ficção" },
    { id: 9, title: "A Arte da Guerra", author: "Sun Tzu", cover: "/images/defaultImg.webp", category: "Estratégia" },
    { id: 10, title: "Como Funciona a Inovação", author: "Matt Ridley", cover: "/images/defaultImg.webp", category: "Ciência" },
  ];

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target && e.target.result) {
          setAvatar(e.target.result as string); // Atualiza o avatar com a nova imagem
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev); // Alterna a exibição das notificações
  };

  const handleNext = (setIndex: React.Dispatch<React.SetStateAction<number>>, currentIndex: number, booksLength: number) => {
    if (currentIndex + booksPerPage < booksLength) {
      setIndex(currentIndex + booksPerPage);
    }
  };

  const handlePrev = (setIndex: React.Dispatch<React.SetStateAction<number>>, currentIndex: number) => {
    if (currentIndex - booksPerPage >= 0) {
      setIndex(currentIndex - booksPerPage);
    }
  };

  return (
    <div className="bg-green-100 min-h-screen p-4 relative">
      {/* Quick Info Container */}
      <div className="bg-green-300 p-6 rounded-lg shadow-md flex items-center justify-between">
        {/* Avatar and Name */}
        <div className="flex items-center">
          <div className="relative">
            <img
              src={avatar}
              alt="Avatar do Aluno"
              className="w-16 h-16 rounded-full border-4 border-white shadow-md"
            />
            <label htmlFor="avatarInput" className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer shadow-md">
            <img src="/images/lapinho.png" alt="Editar Avatar" className="w-6 h-6" />
            </label>
            <input
              id="avatarInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-900">Pedro</h1>
            <p className="text-gray-700 text-sm">
              Bem-vindo(a) ao mundo mágico da leitura, Pedro! 🌟 Vamos conquistar novos conhecimentos juntos?
            </p>
          </div>
        </div>
        {/* Points and Notifications */}
        <div className="flex items-center gap-6">
          <div className="text-center">
            <p className="text-lg font-bold text-gray-900">150</p>
            <p className="text-gray-700 text-sm">QuestPoints</p>
          </div>
          <div className="relative">
            <button
              className="bg-white rounded-full p-2 shadow-md"
              onClick={toggleNotifications}
            >
              <img src="/images/sino.png" alt="Notificações" className="w-6 h-6" />
            </button>
            {/* Notification Box */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-10">
                <h2 className="text-lg font-bold text-gray-800 mb-2">Notificações</h2>
                {notifications.length > 0 ? (
                  <ul className="space-y-2">
                    {notifications.map((notification, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-700 border-b last:border-b-0 pb-2 last:pb-0"
                      >
                        {notification}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500">Sem notificações recentes.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Carrossel "Continuar Lendo" */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Continuar Lendo</h2>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full focus:outline-none z-10"
            onClick={() => handlePrev(setCurrentIndexContinue, currentIndexContinue)}
          >
            <img
              src="/images/arrow_left.png"
              alt="Voltar"
              className="w-8 h-8"
            />
          </button>
          <div className="grid grid-cols-4 gap-4 overflow-hidden">
            {continueReadingBooks
              .slice(currentIndexContinue, currentIndexContinue + booksPerPage)
              .map((book) => (
                <div key={book.id} className="bg-white rounded-lg shadow-md p-4">
                  <img
                    src={book.cover}
                    alt={`Capa do livro ${book.title}`}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <h3 className="mt-2 font-bold text-gray-800">{book.title}</h3>
                  <p className="text-gray-600 text-sm">Autor: {book.author}</p>
                  <span className="text-xs text-gray-500">{book.category}</span>
                </div>
              ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full focus:outline-none z-10"
            onClick={() =>
              handleNext(
                setCurrentIndexContinue,
                currentIndexContinue,
                continueReadingBooks.length
              )
            }
          >
            <img
              src="/images/arrow_right.png"
              alt="Avançar"
              className="w-8 h-8"
            />
          </button>
        </div>
      </section>

      {/* Carrossel "Sugestões de Livros" */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Sugestões de Livros</h2>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full focus:outline-none z-10"
            onClick={() => handlePrev(setCurrentIndexSuggestions, currentIndexSuggestions)}
          >
            <img
              src="/images/arrow_left.png"
              alt="Voltar"
              className="w-8 h-8"
            />
          </button>
          <div className="grid grid-cols-4 gap-4 overflow-hidden">
            {suggestedBooks
              .slice(currentIndexSuggestions, currentIndexSuggestions + booksPerPage)
              .map((book) => (
                <div key={book.id} className="bg-white rounded-lg shadow-md p-4">
                  <img
                    src={book.cover}
                    alt={`Capa do livro ${book.title}`}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <h3 className="mt-2 font-bold text-gray-800">{book.title}</h3>
                  <p className="text-gray-600 text-sm">Autor: {book.author}</p>
                  <span className="text-xs text-gray-500">{book.category}</span>
                </div>
              ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full focus:outline-none z-10"
            onClick={() =>
              handleNext(
                setCurrentIndexSuggestions,
                currentIndexSuggestions,
                suggestedBooks.length
              )
            }
          >
            <img
              src="/images/arrow_right.png"
              alt="Avançar"
              className="w-8 h-8"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
