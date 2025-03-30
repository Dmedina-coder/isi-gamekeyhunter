import React, { useEffect, useState } from "react";
import steam from "../steam.json"

function GameInfo() {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    // Accede directamente al contenido del JSON importado
    if (steam["1245620"] && steam["1245620"].success) {
      const gameDetails = steam["1245620"].data;
      setGameData({
        title: gameDetails.name, // Nombre del juego
        platform: gameDetails.platforms.windows ? "PC" : "Other", // Verifica si está disponible en Windows
        releaseDate: gameDetails.release_date.date, // Fecha de lanzamiento
        description: gameDetails.short_description, // Descripción corta
        coverImage: gameDetails.header_image, // Imagen de portada
      });
    } else {
      console.error("Juego no encontrado en el archivo JSON");
    }
  }, []);


  if (!gameData) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <style jsx>{`
          .loading-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid rgba(255, 255, 255, 0.3);
            border-top: 5px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <section className="game-info">
      <img
        src={gameData.coverImage}
        alt="Game cover"
        className="game-cover"
      />
      <div className="game-details">
        <h1 className="game-title">{gameData.title}</h1>
        <h2 className="game-platform">{gameData.platform}</h2>
        <p className="game-release-date">{gameData.releaseDate}</p>
        <p className="game-description">{gameData.description}</p>
      </div>
      <style jsx>{`
        .game-info {
          display: flex;
          align-items: center; /* Centra los elementos horizontalmente */
          gap: 20px; /* Espaciado entre los elementos */
          border-radius: 12px;
          padding: 23px 26px;
          background-color: #023844;
        }
        .game-cover {
          width: 460px;
          height: 215px;
          object-fit: fill;
        }
        .game-details {
          display: flex;
          flex-direction: column;
          gap: 10px; /* Espaciado entre los campos de texto */
          text-align: center; /* Centra el texto */
        }
        .game-title {
          color: #e6e6e6;
          font-family: "Inter", sans-serif;
          font-size: 40px;
          font-weight: 700;
          margin: 0;
        }
        .game-platform {
          color: #e0e0e0;
          font-family: "Inter", sans-serif;
          font-size: 24px;
          font-weight: normal;
          margin: 0;
        }
        .game-release-date {
          color: #e0e0e0;
          font-family: "Inter", sans-serif;
          font-size: 24px;
          margin: 0;
        }
        .game-description {
          color: #828282;
          font-family: "Inter", sans-serif;
          font-size: 20px;
          line-height: 150%;
          margin: 0;
        }
        @media (max-width: 1020px) {
          .game-info {
            padding: 15px;
            flex-direction: column; /* Cambia la dirección a columna para apilar los elementos */
          }
          .game-title {
            font-size: 30px;
          }
          .game-platform, .game-release-date {
            font-size: 20px;
          }
          .game-description {
            font-size: 16px;
          }
        }
        @media (max-width: 450px) {
          .game-info {
            padding: 0px 0px 20px 0px;

          }
          .game-cover {
            border-radius: 12px 12px 0px 0px;
            overflow: hidden;
            width: 100%;
            height: 200px;
            object-fit: cover;
          }
          .game-description {
            margin: 0 20px;
          }
        }
      `}</style>
    </section>
  );
}

export default GameInfo;
