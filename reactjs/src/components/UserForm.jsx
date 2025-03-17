"use client";
import React, { useState } from "react";
import AgeSelectionGroup from "./AgeSelectionGroup";
import GamePreferencesGroup from "./GamePreferencesGroup";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    address: "",
    province: "",
    city: "",
    postalCode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="form-section">
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="surname" className="form-label">Apellidos</label>
          <input
            type="text"
            id="surname"
            name="surname"
            className="form-input"
            value={formData.surname}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">Dirección</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-input"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="province" className="form-label">Provincia</label>
          <input
            type="text"
            id="province"
            name="province"
            className="form-input"
            value={formData.province}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="city" className="form-label">Ciudad</label>
          <input
            type="text"
            id="city"
            name="city"
            className="form-input"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="postalCode" className="form-label">Codigo Postal</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            className="form-input"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </div>

        <AgeSelectionGroup />
        <GamePreferencesGroup />

        <button type="submit" className="submit-button">Finalizar</button>
      </form>

      <style jsx>{`
        .form-section {
          margin-top: 2rem;
          background-color: #002a36;
          border-radius: 0.5rem;
          padding: 2rem;
        }
        .user-form {
          display: grid;
          gap: 1.5rem;
        }
        .form-group {
          display: grid;
          gap: 1rem;
        }
        .form-label {
          color: #ffffff;
        }
        .form-input {
          width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          border-radius: 0.25rem;
          background-color: #ffffff;
        }
        .submit-button {
          width: 100%;
          margin-top: 2rem;
          background-color: #1a1a1a;
          color: #ffffff;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          border-radius: 0.25rem;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}

export default UserForm;
