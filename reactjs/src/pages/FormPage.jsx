"use client";
import * as React from "react";
import Header from "../components/Header";
import UserForm from "../components/UserForm";
import Footer from "../components/Footer";

function FormPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className="app-container">
        <div className="content-wrapper">
          <Header />
          <UserForm />
          <Footer />
        </div>
      </main>
      <style jsx>{`
        .app-container {
          min-height: screen;
          background-color: #001720;
          font-family: Inter;
        }
        .content-wrapper {
          max-width: 1442px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
      `}</style>
    </>
  );
}

export default FormPage;
