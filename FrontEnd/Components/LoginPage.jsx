"use client";
import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import Footer from "./Footer";

function LoginPage() {
  return (
    <main className="flex flex-col bg-teal-950 min-h-screen">
      <Header />
      <section className="px-10 py-16 mx-auto max-w-none max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <LoginForm />
      </section>
      <Footer />
    </main>
  );
}

export default LoginPage;