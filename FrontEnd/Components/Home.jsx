"use client";
import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import FeaturedGame from "./FeaturedGame";
import GameList from "./GameList";
import TestimonialSection from "./TestimonialSection";
import Footer from "./Footer";

const Home = () => {
  // Sample data for the top 5 most searched games
  const topSearchedGames = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d00ef2d1f27a20aee8aeb8bcbb635bfbe31baa0688bf20ecbe4549a546d6c4c7?placeholderIfAbsent=true&apiKey=f682e8de3cb14cc19333c5fafcca59c5",
      title: "Lorem Ipsum",
      price: "99.99€",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d00ef2d1f27a20aee8aeb8bcbb635bfbe31baa0688bf20ecbe4549a546d6c4c7?placeholderIfAbsent=true&apiKey=f682e8de3cb14cc19333c5fafcca59c5",
      title: "Lorem Ipsum",
      price: "99.99€",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d00ef2d1f27a20aee8aeb8bcbb635bfbe31baa0688bf20ecbe4549a546d6c4c7?placeholderIfAbsent=true&apiKey=f682e8de3cb14cc19333c5fafcca59c5",
      title: "Lorem Ipsum",
      price: "99.99€",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d00ef2d1f27a20aee8aeb8bcbb635bfbe31baa0688bf20ecbe4549a546d6c4c7?placeholderIfAbsent=true&apiKey=f682e8de3cb14cc19333c5fafcca59c5",
      title: "Lorem Ipsum",
      price: "99.99€",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d00ef2d1f27a20aee8aeb8bcbb635bfbe31baa0688bf20ecbe4549a546d6c4c7?placeholderIfAbsent=true&apiKey=f682e8de3cb14cc19333c5fafcca59c5",
      title: "Lorem Ipsum",
      price: "99.99€",
    },
  ];

  // Sample data for the top 5 last searched games
  const lastSearchedGames = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d00ef2d1f27a20aee8aeb8bcbb635bfbe31baa0688bf20ecbe4549a546d6c4c7?placeholderIfAbsent=true&apiKey=f682e8de3cb14cc19333c5fafcca59c5",
      title: "Lorem Ipsum",
      price: "99.99€",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d00ef2d1f27a20aee8aeb8bcbb635bfbe31baa0688bf20ecbe4549a546d6c4c7?placeholderIfAbsent=true&apiKey=f682e8de3cb14cc19333c5fafcca59c5",
      title: "Lorem Ipsum",
      price: "99.99€",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d00ef2d1f27a20aee8aeb8bcbb635bfbe31baa0688bf20ecbe4549a546d6c4c7?placeholderIfAbsent=true&apiKey=f682e8de3cb14cc19333c5fafcca59c5",
      title: "Lorem Ipsum",
      price: "99.99€",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d00ef2d1f27a20aee8aeb8bcbb635bfbe31baa0688bf20ecbe4549a546d6c4c7?placeholderIfAbsent=true&apiKey=f682e8de3cb14cc19333c5fafcca59c5",
      title: "Lorem Ipsum",
      price: "99.99€",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d00ef2d1f27a20aee8aeb8bcbb635bfbe31baa0688bf20ecbe4549a546d6c4c7?placeholderIfAbsent=true&apiKey=f682e8de3cb14cc19333c5fafcca59c5",
      title: "Lorem Ipsum",
      price: "99.99€",
    },
  ];

  return (
    <main className="flex overflow-hidden flex-col bg-teal-950">
      <Header />
      <Banner />
      <FeaturedGame />
      <GameList title="TOP 5 MAS BUSCADOS" games={topSearchedGames} />
      <GameList title="TOP 5 UTLIMOS BUSCADOS" games={lastSearchedGames} />
      <TestimonialSection />
      <Footer />
    </main>
  );
};

export default Home;
