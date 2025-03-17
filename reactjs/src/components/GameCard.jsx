import React from "react";

function GameCard({ title, price, image }) {
  return (
    <article className="game-card">
      <div className="game-info">
        <div className="game-content">
          <div className="image-column">
            <img src={image} alt={title} className="game-image" />
          </div>
          <div className="title-column">
            <h3 className="game-title">{title}</h3>
          </div>
        </div>
      </div>
      <div className="price-container">
        <div className="price-button">{price}</div>
      </div>

      <style jsx>{`
        .game-card {
          background-color: rgba(2, 56, 68, 1);
          display: flex;
          width: 100%;
          padding-left: 13px;
          padding-top: 1px;
          padding-bottom: 1px;
          align-items: stretch;
          gap: 40px 100px;
          overflow: hidden;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .game-info {
          margin: auto 0;
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: auto;
        }

        .game-content {
          gap: 20px;
          display: flex;
        }

        .image-column {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          line-height: normal;
          width: 38%;
          margin-left: 0px;
        }

        .game-image {
          aspect-ratio: 1.46;
          object-fit: contain;
          object-position: center;
          width: 172px;
          flex-shrink: 0;
          max-width: 100%;
          flex-grow: 1;
        }

        .title-column {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          line-height: normal;
          width: 62%;
          margin-left: 20px;
        }

        .game-title {
          color: rgba(197, 197, 197, 1);
          font-size: 48px;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-weight: 600;
          letter-spacing: -0.96px;
          margin: auto 0;
          align-self: stretch;
        }

        .price-container {
          display: flex;
          min-height: 136px;
          align-items: center;
          gap: 24px;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 40px;
          color: rgba(255, 255, 255, 1);
          font-weight: 700;
          white-space: nowrap;
          justify-content: end;
        }

        .price-button {
          align-self: stretch;
          box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
          background-color: #000;
          margin: auto 0;
          min-height: 136px;
          width: 199px;
          padding: 38px 23px 38px 32px;
          gap: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 991px) {
          .game-card {
            max-width: 100%;
          }

          .game-info {
            max-width: 100%;
          }

          .game-content {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }

          .image-column {
            width: 100%;
          }

          .game-image {
            margin-top: 25px;
          }

          .title-column {
            width: 100%;
          }

          .game-title {
            margin-top: 40px;
            font-size: 40px;
          }

          .price-container {
            white-space: initial;
          }

          .price-button {
            padding: 38px 20px;
            white-space: initial;
          }
        }
      `}</style>
    </article>
  );
}

export default GameCard;
