import React from "react";

function AgeSelectionSection({ selectedAge, handleRadioChange }) {
  const ageRanges = [
    { value: "0-13", label: "0 - 13 años" },
    { value: "14-17", label: "14 - 17 años" },
    { value: "18-25", label: "18 - 25 años" },
    { value: "26-35", label: "26 - 35 años" },
    { value: "36-50", label: "36 - 50 años" },
    { value: "50+", label: "Más de 50 años" },
  ];

  return (
    <div>
      <h3 className="mb-4 text-zinc-400">Sobre ti:</h3>
      <p className="mb-2 text-zinc-400">Tu edad</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ageRanges.map((range) => (
          <div className="flex items-center" key={range.value}>
            <input
              type="radio"
              id={`age-${range.value}`}
              name="age"
              value={range.value}
              checked={selectedAge === range.value}
              onChange={handleRadioChange}
              className="mr-2"
            />
            <label htmlFor={`age-${range.value}`} className="text-zinc-400">
              {range.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgeSelectionSection;
