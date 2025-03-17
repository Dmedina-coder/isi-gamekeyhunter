"use client";
import React, { useState } from "react";

function GamePreferencesGroup() {
  const [selectedGames, setSelectedGames] = useState([]);

  const gameTypes = [
    "Acción",
    "RPG",
    "Deportes",
    "Conducción",
    "Fantasía",
    "Narrativos",
    "Aventuras",
    "MMO",
    "Miedo",
  ];

  const handleGameChange = (index) => {
    setSelectedGames((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="game-preferences-section">
      <h3 className="section-title">
        ¿Que juegos te interesa? Selecciona al menos 3
      </h3>

      <div className="checkbox-grid">
        {gameTypes.map((game, index) => (
          <div className="checkbox-item" key={index}>
            <input
              type="checkbox"
              id={`game-${index}`}
              className="checkbox-input"
              checked={selectedGames.includes(index)}
              onChange={() => handleGameChange(index)}
            />
            <label htmlFor={`game-${index}`} className="checkbox-label">
              {game}
            </label>
          </div>
        ))}
      </div>

      <style jsx>{`
        .game-preferences-section {
          margin-top: 1.5rem;
        }
        .section-title {
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

export default GamePreferencesGroup;
