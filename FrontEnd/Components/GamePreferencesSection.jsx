import React from "react";

function GamePreferencesSection({ selectedGames, handleCheckboxChange }) {
  const gameGenres = [
    { value: "accion", label: "Acción" },
    { value: "rpg", label: "RPG" },
    { value: "deportes", label: "Deportes" },
    { value: "conduccion", label: "Conducción" },
    { value: "fantasia", label: "Fantasía" },
    { value: "narrativos", label: "Narrativos" },
    { value: "aventuras", label: "Aventuras" },
    { value: "mmo", label: "MMO" },
    { value: "miedo", label: "Miedo" },
  ];

  return (
    <div>
      <p className="mb-2 text-zinc-400">
        ¿Que juegos te interesa? Selecciona al menos 3
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {gameGenres.map((genre) => (
          <div className="flex items-center" key={genre.value}>
            <input
              type="checkbox"
              id={`game-${genre.value}`}
              name={genre.value}
              checked={selectedGames.includes(genre.value)}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor={`game-${genre.value}`} className="text-zinc-400">
              {genre.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamePreferencesSection;
