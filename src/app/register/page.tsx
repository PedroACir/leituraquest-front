"use client";

import React, { useState } from 'react';

const Page = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const userId = "user1"; // ID fixo para o usuário. Em um app real, seria o ID do usuário logado.

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenreClick = (genre: string) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genre)
        ? prevGenres.filter((g) => g !== genre)
        : [...prevGenres, genre]
    );
  };

  const handleFormSubmit = async () => {
    const { name, cpf, email, confirmEmail, password, confirmPassword } = formData;
  
    // Verificação dos campos
    if (!name || !cpf || !email || !confirmEmail || !password || !confirmPassword) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    if (email !== confirmEmail) {
      alert("Os e-mails não coincidem.");
      return;
    }
    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }
  
    try {
      // Enviar dados para o backend
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, cpf, email }),
      });
  
      if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
        nextStep(); // Passa para a próxima etapa (escolher os gêneros)
      } else {
        const data = await response.json();
        alert(data.message || "Erro ao cadastrar usuário.");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
      alert("Erro ao conectar ao servidor.");
    }
  };
  

  const savePreferences = async () => {
    try {
      await fetch("http://localhost:3000/savePreferences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, genres: selectedGenres }),
      });
      alert("Preferências salvas com sucesso!");
      nextStep();
    } catch (error) {
      console.error("Erro ao salvar preferências:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-center text-2xl font-bold mb-4">LEITURA QUEST</h1>
        <p className="text-center text-sm text-gray-600 mb-6">CADA PÁGINA É UMA AVENTURA!</p>

        {step === 1 && (
          <>
            <h2 className="text-center text-lg font-semibold mb-4">Sua primeira vez? Hora de se cadastrar!</h2>
            <form>
              <label className="block mb-2">
                <span className="text-gray-700">Nome</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Digite seu nome completo"
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">CPF</span>
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Digite seu CPF"
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">E-mail</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Digite seu e-mail"
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">Confirmar E-mail</span>
                <input
                  type="email"
                  name="confirmEmail"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Digite seu e-mail novamente"
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">Senha</span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Digite sua senha"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Confirmar Senha</span>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Digite sua senha novamente"
                />
              </label>
              <button
                type="button"
                onClick={handleFormSubmit}
                className="w-full bg-blue-500 text-white py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              >
                Continuar cadastro
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-center text-lg font-semibold mb-4">Quase lá! Escolha o que mais gosta de ler</h2>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {["Suspense", "Aventura", "Romance", "HQ's", "Ação", "Fábulas", "Mistério", "Ficção Científica", "Conto de Fadas", "Poesia", "Mitologia", "Engraçados", "Morais e Valores", "Histórias"].map((genre) => (
                <button
                  key={genre}
                  onClick={() => handleGenreClick(genre)}
                  className={`border rounded-md py-2 ${selectedGenres.includes(genre) ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200"}`}
                >
                  {genre}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <button onClick={prevStep} className="flex items-center px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200">
                Voltar
              </button>
              <button onClick={savePreferences} className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                Finalizar
              </button>
            </div>
          </>
        )}
30
        {step === 3 && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Cadastro Completo!</h2>
            <p className="text-gray-600 mt-4">Parabéns, você concluiu seu cadastro e está pronto para explorar novas aventuras literárias!</p>
            <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600">
              Começar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
