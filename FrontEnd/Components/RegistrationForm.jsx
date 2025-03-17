"use client";
import React, { useState } from "react";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("******");
  const [confirmPassword, setConfirmPassword] = useState("******");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, password, confirmPassword });
  };

  return (
    <section className="p-6 rounded-lg bg-cyan-950">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-base font-bold text-zinc-400">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ejemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 w-full text-base bg-white rounded-lg border border-solid border-zinc-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-base font-bold text-zinc-400"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 w-full text-base bg-white rounded-lg border border-solid border-zinc-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="confirmPassword"
            className="text-base font-bold text-zinc-400"
          >
            Confirma la contraseña
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-4 py-3 w-full text-base bg-white rounded-lg border border-solid border-zinc-400"
          />
        </div>

        <div className="flex justify-center pt-10">
          <button
            type="submit"
            className="px-4 py-3 w-full rounded-lg border border-solid bg-cyan-950 border-zinc-400 text-neutral-100"
          >
            Registrarse
          </button>
        </div>
      </form>
    </section>
  );
}

export default RegistrationForm;
