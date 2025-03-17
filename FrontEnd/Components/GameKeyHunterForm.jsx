"use client";
import React from "react";
import Header from "./Header";
import ProfileForm from "./ProfileForm";
import Footer from "./Footer";

function GameKeyHunterForm() {
  return (
    <main className="bg-slate-900 min-h-screen font-['Inter']">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div className="px-4 mx-auto max-w-[1442px]">
        <Header />
        <ProfileForm />
        <Footer />
      </div>
    </main>
  );
}

export default GameKeyHunterForm;