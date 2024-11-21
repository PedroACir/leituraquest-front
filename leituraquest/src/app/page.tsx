"use client";

import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-green-400 via-green-300 to-green-500 text-center py-8">
        <h1 className="text-3xl font-bold text-white">Olá, Pedro 👋</h1>
        <p className="text-lg text-white mt-1">Vamos continuar lendo!</p>
      </header>

      {/* Profile Section */}
      <main className="flex-grow px-4 pt-6 pb-20">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-3xl text-gray-400">👤</span>
          </div>
          <div className="mt-6 flex justify-around w-full max-w-md">
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold text-gray-700">150</span>
              <span className="text-sm text-gray-500">QuestPoints</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold text-gray-700">150</span>
              <span className="text-sm text-gray-500">QuestCoins</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mt-6">
          <input
            type="text"
            placeholder="🔍 Digite para buscar livros"
            className="w-full rounded-full border border-gray-300 px-6 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Book Sections */}
        <section className="max-w-5xl mx-auto px-4 mt-8">
          {/* Book Collection */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span role="img" aria-label="books" className="mr-2">
              📚
            </span>
            Acervo de livros
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array(8)
              .fill("")
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform"
                >
                  <div className="w-full h-40 bg-yellow-200 flex items-center justify-center">
                    <span className="text-lg font-semibold text-center">
                      How Innovation Works
                    </span>
                  </div>
                  <div className="p-3">
                    <span className="block text-sm text-gray-700">
                      Livro de Ciência
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {/* Continue Reading */}
          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4 flex items-center">
            <span role="img" aria-label="continue reading" className="mr-2">
              ⏩
            </span>
            Continuar minhas leituras
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array(4)
              .fill("")
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform"
                >
                  <div className="w-full h-40 bg-yellow-200 flex items-center justify-center">
                    <span className="text-lg font-semibold text-center">
                      How Innovation Works
                    </span>
                  </div>
                  <div className="p-3">
                    <span className="block text-sm text-gray-700">
                      Livro de Ciência
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>

      {/* Footer Navigation */}
      <footer className="w-full bg-white shadow-lg border-t border-gray-200 fixed bottom-0">
        <div className="flex justify-around py-3">
          <button className="flex flex-col items-center text-green-500">
            <span className="text-xl">🏠</span>
            <span className="text-xs">Início</span>
          </button>
          <button className="flex flex-col items-center text-gray-500 hover:text-green-500">
            <span className="text-xl">👥</span>
            <span className="text-xs">Comunidade</span>
          </button>
          <button className="flex flex-col items-center text-gray-500 hover:text-green-500">
            <span className="text-xl">📊</span>
            <span className="text-xs">Painel</span>
          </button>
          <button className="flex flex-col items-center text-gray-500 hover:text-green-500">
            <span className="text-xl">📝</span>
            <span className="text-xs">Mural</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Page;
