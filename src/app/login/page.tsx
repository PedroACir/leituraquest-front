"use client";

import React, { useState } from "react";
import TextLogo from "../components/TextLogo";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import PrimaryButton from "../components/Buttons/PrimaryButton";

const Page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Para exibir feedback visual durante o login
  const [error, setError] = useState(""); // Para exibir mensagens de erro
  const [success, setSuccess] = useState(""); // Para exibir mensagens de sucesso

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const { email, password } = formData;

    // Validação de campos
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    setLoading(true); // Exibir feedback de carregamento
    setError(""); // Limpar erros anteriores
    setSuccess(""); // Limpar mensagens anteriores

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess("Login bem-sucedido!");
        console.log("Usuário logado:", data.user);

        // Exemplo de redirecionamento após login bem-sucedido
        setTimeout(() => {
          window.location.href = "/home"; // Certifique-se de que a página /home existe
        }, 1500); // Redirecionar após 1,5 segundos
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Erro ao realizar login");
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      setError("Erro ao conectar ao servidor");
    } finally {
      setLoading(false); // Parar feedback de carregamento
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="hidden md:block">
        <img
          src="/images/auth_image_1x.webp"
          alt="authImage"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center items-center px-8 md:px-16">
        <TextLogo title="Já possui conta?" subTittle="Basta se conectar!" />

        <div className="w-full max-w-sm mt-8 space-y-4">
          {/* Mensagens de erro e sucesso */}
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <TextInput
            label="E-Mail"
            placeholder="Digite seu e-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <PrimaryButton
            buttonContent={loading ? "Entrando..." : "Realizar login"}
            onClick={handleLogin}
            disabled={loading} // Desabilitar botão enquanto carrega
          />

          <p className="text-center text-gray-600 mt-4">
            Primeiro acesso?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Cadastre-se
            </a>
          </p>

          <p className="text-center text-gray-600 mt-4">
            Esqueceu sua senha?{" "}
            <a href="/forgot" className="text-blue-600 hover:underline">
              Recupere-a agora mesmo!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
