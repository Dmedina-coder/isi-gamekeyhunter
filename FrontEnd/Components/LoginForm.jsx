"use client";
import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("*******");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <section className="p-12 mx-auto w-full rounded-2xl border border-solid bg-cyan-950 border-white border-opacity-10 max-w-[1342px]">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xl font-bold text-zinc-400">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ejemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 w-full text-base bg-white rounded-lg border border-solid border-white border-opacity-10 text-zinc-400"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-xl font-bold text-zinc-400">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 w-full text-base bg-white rounded-lg border border-solid border-white border-opacity-10 text-zinc-400"
            required
          />
        </div>

        <button
          type="submit"
          className="p-3 w-full text-base rounded-lg bg-white bg-opacity-10 text-neutral-100 hover:bg-opacity-20 transition-colors"
        >
          Sign In
        </button>

        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-base underline text-neutral-100 hover:text-neutral-200"
          >
            Forgot password?
          </a>
          <a
            href="#"
            className="text-base underline text-neutral-100 hover:text-neutral-200"
          >
            ¿No tienes Cuenta? Registrate
          </a>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
