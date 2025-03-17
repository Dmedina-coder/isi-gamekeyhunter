"use client";
import React, { useState } from "react";
import PersonalInfoSection from "./PersonalInfoSection";
import AgeSelectionSection from "./AgeSelectionSection";
import GamePreferencesSection from "./GamePreferencesSection";

function ProfileForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    direccion: "",
    provincia: "",
    ciudad: "",
    codigoPostal: "",
    edad: "",
    juegos: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        juegos: [...formData.juegos, name],
      });
    } else {
      setFormData({
        ...formData,
        juegos: formData.juegos.filter((juego) => juego !== name),
      });
    }
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      edad: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <section className="p-8 mt-8 rounded-lg bg-teal-950">
      <form className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4">
          <PersonalInfoSection
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <AgeSelectionSection
            selectedAge={formData.edad}
            handleRadioChange={handleRadioChange}
          />

          <GamePreferencesSection
            selectedGames={formData.juegos}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>

        <button
          type="submit"
          className="py-3 mt-6 w-full text-white rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
        >
          Finalizar
        </button>
      </form>
    </section>
  );
}

export default ProfileForm;
