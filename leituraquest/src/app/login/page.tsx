import React from 'react';
import TextLogo from '../components/TextLogo';
import TextInput from '../components/TextInput';
import PasswordInput from '../components/PasswordInput';
import PrimaryButton from '../components/Buttons/PrimaryButton';

const Page = () => {
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

        <div className="w-full max-w-sm mt-8  space-y-4">
          <TextInput label="E-Mail" placeholder="Digite seu e-mail" />
          <PasswordInput label="Senha" placeholder="Digite sua senha" />

          <PrimaryButton buttonContent="Realizar login"/>

          <p className="text-center text-gray-600 mt-4">
            Primeiro acesso?{' '}
            <a href="/register" className="text-blue-600 hover:underline">
              Cadastre-se
            </a>
          </p>

          <p className="text-center text-gray-600 mt-4">
            Esqueceu sua senha?{' '}
            <a href="/forgot" className="text-blue-600 hover:underline">
              Recupera-a agora mesmo!
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Page;
