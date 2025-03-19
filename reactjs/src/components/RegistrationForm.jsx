"use client";
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function RegistrationForm() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <section className="form-section">
      <div className="form-container">
        <div className="form-fields">
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Ejemplo@email.com"
              className="email-input"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">Contraseña</label>
            <input
              id="password"
              type="password"
              value="******"
              className="password-input"
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password" className="input-label">Confirma la contraseña</label>
            <input
              id="confirm-password"
              type="password"
              value="******"
              className="password-input"
            />
          </div>
          <button className="submit-button" onClick={() => navigate("/form")}>
            Registrarse
          </button>
          </div>
        </div>
      <style jsx>{`
        .form-section {
          width: 90%;
          margin-left: auto;
          margin-right: auto;
          background-color: #023844;
          border-radius: 16px;
          padding: 48px;
        }

        .form-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-label {
          font-size: 20px;
          font-weight: 700;
          color: rgba(179, 179, 179, 1);
          font-family: Inter, sans-serif;
        }

        .email-input,
        .password-input {
          width: auto; /* Asegura que todos tengan el mismo ancho */
          padding: 12px; /* Igual padding para inputs y botón */
          border-radius: 8px;
          font-size: 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background-color: #ffffff;
          color: rgba(179, 179, 179, 1);
        }

        .submit-button {
          width: 100%; /* Asegura que todos tengan el mismo ancho */
          padding: 12px; /* Igual padding para inputs y botón */
          border-radius: 8px;
          font-size: 16px;
          background-color: rgba(255, 255, 255, 0.12);
          color: rgba(245, 245, 245, 1);
          border: none;
          cursor: pointer;
        }

        @media (max-width: 980px) {
          .form-section {
            padding: 30px;
          }
          .main-content {
            width: 90%;
          }
        }
        @media (max-width: 640px) {
          .form-section {
            padding: 20px;
          }
          .main-content {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default RegistrationForm;
