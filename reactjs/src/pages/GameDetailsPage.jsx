"use client";
import * as React from "react";
import { useParams } from "react-router-dom"; // Import useParams from React Router
import Header from "../components/Header";
import GameInfo from "../components/GameInfo";
import StoreRecommendation from "../components/StoreRecommendation";
import StoreList from "../components/StoreList";
import Footer from "../components/Footer";

function GameDetailsPage() {
  const { gameid } = useParams(); // Get the 'gameid' parameter from the URL
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
        rel="stylesheet"
      />
      <div className="page-container">
        <Header />
        <main className="main-content">
          <GameInfo
            title={gameid}
            platform="Plataforma"
            releaseDate="Fecha lanzamiento"
            description="Proin cursus eros velit, at venenatis leo elementum quis. Quisque a elit sodales, tincidunt massa eget, commodo justo. Sed ut magna ipsum. In interdum a ex eget condimentum. Pellentesque ligula erat, imperdiet in iaculis vitae, hendrerit et justo. Etiam vel facilisis sem. Quisque accumsan non dolor sit amet finibus. Mauris nec mauris turpis."
            coverImage="https://cdn.builder.io/api/v1/image/assets/TEMP/8ce9275215607e4ee163d65ae42f41b6976b7681"
          />
          <section className="stores-section">
            <StoreRecommendation
              storeName="Nombre Tienda"
              platform="Plataforma"
              price="99.99€"
              storeLogoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/9c3695b93a052d93070c48846c2bc5631dce5e61"
              platformLogoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/9c3695b93a052d93070c48846c2bc5631dce5e61"
            />
            <StoreList />
          </section>
        </main>
        <Footer />
      </div>
      <style jsx>{`
        .page-container {
          max-width: none;
          margin-left: auto;
          margin-right: auto;
          min-height: 100vh;
          width: 100%;
          background-color: #022839;
        }
        .main-content {
          padding: 20px 52px;
        }
        .stores-section {
          margin-top: 33px;
        }
        @media (max-width: 991px) {
          .page-container {
            max-width: 991px;
          }
        }
        @media (max-width: 640px) {
          .page-container {
            max-width: 640px;
          }
          .main-content {
            padding: 20px 20px;
          }
        }
      `}</style>
    </>
  );
}

export default GameDetailsPage;
