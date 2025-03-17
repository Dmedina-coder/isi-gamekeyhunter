"use client";
import React from "react";
import Header from "./Header";
import GameDetails from "./GameDetails";
import PriceComparison from "./PriceComparison";
import Footer from "./Footer";

function GameDetailsPage() {
  return (
    <div className="mx-auto w-full max-w-none min-h-screen bg-teal-950 max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <Header />
      <main className="px-14 py-5">
        <GameDetails />
        <PriceComparison />
      </main>
      <Footer />
    </div>
  );
}

export default GameDetailsPage;
