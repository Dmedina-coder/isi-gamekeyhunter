"use client";
import React from "react";

function LoginForm() {
  return (
    <section className="form-section">
      <div className="form-container">
        <div className="form-fields">
          <div className="input-group">
            <label className="input-label">Email</label>
            <input
              type="email"
              placeholder="Ejemplo@email.com"
              className="email-input"
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              value="*******"
              className="password-input"
            />
          </div>

          <button className="signin-button">Sign In</button>

          <div className="links-container">
            <a href="#" className="form-link">
              Forgot password?
            </a>
            <a href="#" className="form-link">
              ¿No tienes Cuenta? Registrate
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .form-section {
          width: 100%;
          max-width: 1342px;
          margin-left: auto;
          margin-right: auto;
          background-color: #023844;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
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
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background-color: #ffffff;
          font-size: 16px;
          color: rgba(179, 179, 179, 1);
        }

        .signin-button {
          width: 100%;
          padding: 12px;
          background-color: rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          font-size: 16px;
          color: rgba(245, 245, 245, 1);
          border: none;
          cursor: pointer;
        }

        .links-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .form-link {
          font-size: 16px;
          color: rgba(245, 245, 245, 1);
          text-decoration-line: underline;
        }
      `}</style>
    </section>
  );
}

export default LoginForm;
