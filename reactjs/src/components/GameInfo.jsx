import * as React from "react";

function GameInfo({ title, platform, releaseDate, description, coverImage }) {
  return (
    <section className="game-info">
      <img
        src={coverImage}
        alt="Game cover"
        className="game-cover"
      />
      <div className="game-details">
        <h1 className="game-title">{title}</h1>
        <h2 className="game-platform">{platform}</h2>
        <p className="game-release-date">{releaseDate}</p>
        <p className="game-description">{description}</p>
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
