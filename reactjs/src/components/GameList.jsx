import React from "react";
import GameCard from "./GameCard";

function GameList({ title, games, className }) {
  return (
    <section className={`game-list ${className}`}>
      <h2 className="section-title">{title}</h2>
      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          price={game.price}
          image={game.image}
        />
      ))}

      <style jsx>{`
        .game-list {
          background-color: rgba(6, 31, 46, 1);
          display: flex;
          margin-top: 20px;
          width: 100%;
          padding-bottom: 23px;
          flex-direction: column;
          overflow: hidden;
          align-items: stretch;
        }

        .section-title {
          color: rgba(197, 197, 197, 1);
          font-size: 36px;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-weight: 900;
          text-align: center;
          align-self: center;
          margin: 0 0 20px 0;
        }

        .latest-searched {
          margin-top: 16px;
        }

        @media (max-width: 991px) {
          .game-list {
            max-width: 100%;
          }

          .section-title {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default GameList;
