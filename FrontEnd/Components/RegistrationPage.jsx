"use client";
import React from "react";
import Header from "./Header";
import RegistrationForm from "./RegistrationForm";
import Footer from "./Footer";

function RegistrationPage() {
  return (
    <div className="flex flex-col bg-teal-950 min-h-screen">
      <Header />
      <main className="p-10 mx-auto max-w-none max-md:px-5 max-md:max-w-[991px] max-sm:px-2.5 max-sm:max-w-screen-sm">
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}

export default RegistrationPage;