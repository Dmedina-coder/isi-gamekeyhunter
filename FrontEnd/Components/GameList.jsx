import React from "react";
import GameCard from "./GameCard";

const GameList = ({ title, games }) => {
  return (
    <section className="flex overflow-hidden flex-col pb-6 mt-5 w-full bg-slate-900 max-md:max-w-full">
      <h2 className="self-center text-4xl font-black text-center text-stone-300 max-md:max-w-full">
        {title}
      </h2>
      {games.map((game, index) => (
        <div key={index} className={index > 0 ? "mt-5" : ""}>
          <GameCard
            imageSrc={game.imageSrc}
            title={game.title}
            price={game.price}
          />
        </div>
      ))}
    </section>
  );
};

export default GameList;