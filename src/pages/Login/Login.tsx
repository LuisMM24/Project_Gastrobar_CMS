import React, { useState } from "react";
// logo
import logo from "../../assets/img/logo.png";
import { LockClosedIcon } from "@heroicons/react/solid";
// utils
import { signInEmailAndPassword } from "../../services/firebase/firebase";

const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const handleLogin = async (
    e: React.ChangeEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setError(null);
    try {
      const formData = new FormData(e.target);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      await signInEmailAndPassword(email, password);
    } catch (e) {
      if (e instanceof Error) {
        if (e.message === "Firebase: Error (auth/wrong-password).") {
          setError("Contraseña inválida");
        }
        if (e.message === "Firebase: Error (auth/user-not-found).") {
          setError("Dirección de correo inválido");
        }
      } else {
        setError("error inesperado");
      }
    }
  };
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src={logo} alt="Logo" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Entra en Gastro Bar Santi
            </h2>
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                  placeholder="Dirección de email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>
            </div>
            <div className="flex justify-center py-1">
              {error && <p className="text-red-700">{error}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-800 hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-pink-500 group-hover:text-pink-400"
                    aria-hidden="true"
                  />
                </span>
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
