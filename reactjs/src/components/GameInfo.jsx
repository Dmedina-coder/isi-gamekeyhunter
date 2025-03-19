import React, { useEffect, useState } from "react";

function GameInfo() {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const url = "https://store.steampowered.com/api/appdetails?appids=730&cc=EU&l=es";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Respuesta de la API:", data); // Depuración: imprime el JSON completo

        if (data["730"] && data["730"].success) {
          const gameDetails = data["730"].data;
          setGameData({
            title: gameDetails.name,
            platform: "PC",
            releaseDate: gameDetails.release_date.date,
            description: gameDetails.short_description,
            coverImage: gameDetails.header_image,
          });
        } else {
          return(<p>"juego no encontrado"</p>);
        }
      
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);
  return(<p>{gameData.title}</p>);
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
          gap: 96px;
          border-radius: 12px;
          padding: 23px 26px;
          background-color: #023844;
        }
        .game-cover {
          width: 230px;
          height: 345px;
          object-fit: cover;
        }
        .game-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-top: 13px;
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
        @media (max-width: 991px) {
          .game-info {
            flex-direction: column;
            align-items: center;
            gap: 40px;
          }
        }
        @media (max-width: 640px) {
          .game-info {
            padding: 15px;
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
      `}</style>
    </section>
  );
}

export default GameInfo;
