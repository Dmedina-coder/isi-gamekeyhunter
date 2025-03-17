"use client";
import React, { useState } from "react";
import logo from "../media/Logo_web.png"; // Import the new logo image
import banner from "../media/Banner_web.png"; // Import the new banner image

function Header() {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
        <img
          src={banner}
          alt="Logo text"
          className="logo-text"
        />
      </div>
      <div className="search-bar">
        <div className="search-layer">
          <input
            type="text"
            className="search-input"
            placeholder="Busca un juego..."
            value={searchText}
            onChange={handleInputChange}
          />
          <div className="search-icon-container">
            <div className="icon-wrapper">
              <div className="icon-inner">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/386207518883442a607ffd5068af0d6571abcc6654e219af2e8d84919581a2c5?placeholderIfAbsent=true&apiKey=f682e8de3cb14cc19333c5fafcca59c5"
                  alt="Search"
                  className="search-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header {
          background-color: rgba(6, 31, 46, 1);
          width: 100%;
          padding: 18px 43px 34px;
          overflow: hidden;
        }

        .logo-container {
          display: flex;
          width: 100%;
          max-width: 1146px;
          align-items: stretch;
          gap: 40px 76px;
          flex-wrap: wrap;
        }

        .logo {
          aspect-ratio: 2.03;
          object-fit: contain;
          object-position: center;
          width: 130px;
          margin: auto 0;
          flex-shrink: 0;
          max-width: 100%;
        }

        .logo-text {
          aspect-ratio: 7.35;
          object-fit: contain;
          object-position: center;
          width: 80%;
          flex-grow: 1;
          flex-shrink: 0;
          flex-basis: 0;
        }

        .search-bar {
          justify-content: center;
          align-items: stretch;
          border-radius: 28px;
          background-color: #fff;
          display: flex;
          margin: 18px 20px; /* Added margin to the sides */
          min-height: 61px;
          width: calc(100% - 40px); /* Adjusted width to account for margin */
          gap: 4px;
          overflow: hidden;
        }

        .search-layer {
          background-color: rgba(239, 238, 227, 1);
          display: flex;
          min-width: 100%;
          width: 100%;
          padding: 4px;
          align-items: stretch;
          gap: 4px;
          justify-content: start;
          flex-wrap: wrap;
          height: 100%;
          flex: 1;
          flex-shrink: 1;
          flex-basis: 0%;
        }

        .search-input {
          align-self: stretch;
          background-color: rgba(239, 238, 227, 1);
          min-width: 240px;
          gap: 10px;
          font-family:
            Roboto,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: 36px;
          color: #000; /* Changed text color to black */
          font-weight: 400;
          text-align: left;
          letter-spacing: 0px;
          line-height: 1;
          height: 100%;
          flex: 1;
          flex-shrink: 1;
          flex-basis: 0%;
          margin: 10px;
          border: none;
          outline: none;
          padding: 0 10px;
        }

        .search-icon-container {
          display: flex;
          margin: auto 0;
          align-items: right;
          justify-content: end;
          width: 48px;
        }

        .icon-wrapper {
          align-self: stretch;
          display: flex;
          margin: auto 0;
          min-height: 48px;
          width: 48px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .icon-inner {
          border-radius: 100px;
          display: flex;
          width: 100%;
          max-width: 40px;
          align-items: center;
          gap: 10px;
          overflow: hidden;
          justify-content: center;
        }

        .search-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          align-self: stretch;
          margin: auto 0;
        }

        @media (max-width: 1140px) {
          .logo-text {
            display: none; /* Hide the banner on smaller screens */
          }
        }

        @media (max-width: 991px) {
          .header {
            max-width: 100%;
            padding: 18px 20px 34px;
          }

          .logo-container {
            max-width: 100%;
          }

          .logo {
            width: 100px; /* Adjust logo size for smaller screens */
          }

          .search-layer {
            max-width: 100%;
          }

          .search-input {
            max-width: 100%;
            font-size: 24px;
            margin: 5px;
          }

          .search-bar {
            margin: 10px 10px; /* Adjusted margin for smaller screens */
            min-height: 50px;
            width: calc(100% - 20px); /* Adjusted width to account for margin */
          }

          .search-icon-container {
            width: 40px;
          }

          .icon-wrapper {
            min-height: 40px;
            width: 40px;
          }

          .icon-inner {
            max-width: 30px;
          }

          .search-icon {
            width: 20px;
          }
        }

        @media (max-width: 600px) {
          .logo {
            width: 80px; 
          }

          .search-input {
            font-size: 18px;
            margin: 2px;
          }

          .search-bar {
            margin: 5px 5px; 
            min-height: 40px;
            width: calc(100% - 10px); 
          }

          .search-icon-container {
            width: 30px;
          }

          .icon-wrapper {
            min-height: 30px;
            width: 30px;
          }

          .icon-inner {
            max-width: 20px;
          }

          .search-icon {
            width: 15px;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;