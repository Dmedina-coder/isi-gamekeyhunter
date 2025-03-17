"use client";
import React from "react";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";
import Footer from "../components/Footer";

function RegistrationPage() {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <RegistrationForm />
      </main>
      <Footer />
      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          min-height: screen;
          background-color: #022839;
        }
        .main-content {
          margin-left: auto;
          margin-right: auto;
          padding: 40px;
          max-width: none;
        }
        @media (max-width: 991px) {
          .main-content {
            padding: 20px;
            max-width: 991px;
          }
        }
        @media (max-width: 640px) {
          .main-content {
            padding: 10px;
            max-width: 640px;
          }
        }
      `}</style>
    </div>
  );
}

export default RegistrationPage;
