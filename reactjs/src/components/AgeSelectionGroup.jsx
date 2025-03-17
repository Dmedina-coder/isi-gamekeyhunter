"use client";
import React, { useState } from "react";

function AgeSelectionGroup() {
  const [selectedAge, setSelectedAge] = useState(null);

  const ageRanges = [
    "0 - 13 años",
    "14 - 17 años",
    "18 - 25 años",
    "26 - 35 años",
    "36 - 50 años",
    "Más de 50 años",
  ];

  const handleAgeChange = (index) => {
    setSelectedAge(index);
  };

  return (
    <div className="age-section">
      <h3 className="section-title">Sobre ti:</h3>
      <h4 className="subsection-title">Tu edad</h4>

      <div className="checkbox-grid">
        {ageRanges.map((range, index) => (
          <div className="checkbox-item" key={index}>
            <input
              type="checkbox"
              id={`age-${index}`}
              className="checkbox-input"
              checked={selectedAge === index}
              onChange={() => handleAgeChange(index)}
            />
            <label htmlFor={`age-${index}`} className="checkbox-label">
              {range}
            </label>
          </div>
        ))}
      </div>

      <style jsx>{`
        .age-section {
          margin-top: 1.5rem;
        }
        .section-title {
          color: #ffffff;
          margin-bottom: 1rem;
          font-size: 1rem;
          font-weight: 500;
        }
        .subsection-title {
          color: #ffffff;
          margin-bottom: 0.5rem;
          font-size: 1rem;
          font-weight: 400;
        }
        .checkbox-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }
        .checkbox-item {
          display: flex;
          align-items: center;
        }
        .checkbox-input {
          margin-right: 0.5rem;
        }
        .checkbox-label {
          color: #ffffff;
        }
      `}</style>
    </div>
  );
}

export default AgeSelectionGroup;
