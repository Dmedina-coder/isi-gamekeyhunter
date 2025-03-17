"use client";
import React from "react";

function RegistrationForm() {
  return (
    <section className="form-section">
      <div className="form-container">
        <form className="registration-form">
          <div className="form-field">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Ejemplo@email.com"
              className="field-input"
            />
          </div>

          <div className="form-field">
            <label htmlFor="password" className="field-label">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value="******"
              className="field-input"
            />
          </div>

          <div className="form-field">
            <label htmlFor="confirm-password" className="field-label">
              Confirma la contraseña
            </label>
            <input
              id="confirm-password"
              type="password"
              value="******"
              className="field-input"
            />
          </div>

          <div className="button-container">
            <button type="submit" className="submit-button">
              Registrarse
            </button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .form-section {
          background-color: #023844;
          border-radius: 8px;
          padding: 24px;
        }
        .form-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .registration-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .field-label {
          color: #b3b3b3;
          font-weight: 700;
          font-size: 16px;
          font-family: Inter, sans-serif;
        }
        .field-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid #b3b3b3;
          background-color: #fff;
          font-size: 16px;
          font-family: Inter, sans-serif;
        }
        .button-container {
          display: flex;
          justify-content: center;
          padding-top: 40px;
        }
        .submit-button {
          width: 100%;
          background-color: #023844;
          color: #f5f5f5;
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid #b3b3b3;
          font-family: Inter, sans-serif;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}

export default RegistrationForm;
