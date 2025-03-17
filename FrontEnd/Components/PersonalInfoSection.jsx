import React from "react";

function PersonalInfoSection({ formData, handleInputChange }) {
  const inputFields = [
    { name: "nombre", label: "Nombre" },
    { name: "apellidos", label: "Apellidos" },
    { name: "direccion", label: "Dirección" },
    { name: "provincia", label: "Provincia" },
    { name: "ciudad", label: "Ciudad" },
    { name: "codigoPostal", label: "Codigo Postal" },
  ];

  return (
    <>
      {inputFields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="mb-2 block text-zinc-400">
            {field.label}
          </label>
          <input
            type="text"
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
            className="px-4 py-2 w-full bg-white rounded"
          />
        </div>
      ))}
    </>
  );
}

export default PersonalInfoSection;
