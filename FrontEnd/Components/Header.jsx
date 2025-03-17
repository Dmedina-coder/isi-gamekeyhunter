"use client";
import React from "react";

function Header() {
  return (
    <header className="w-full bg-slate-900 h-[259px]">
      <div className="flex flex-col px-10 py-5 mx-auto max-w-none max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <div className="flex justify-between items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ffd3c589c6c27b67353456df0204c1f65692d4d"
            alt="Logo"
            className="w-[130px] h-[64px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e5b5dc404a3725bcae65053e5b856fe55b74814"
            alt="Header"
            className="w-[938px] h-[128px] max-lg:w-[600px] max-sm:hidden"
          />
        </div>
        <div className="mt-8">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

function SearchBar() {
  return (
    <div className="flex items-center w-full rounded-3xl shadow-sm bg-stone-200 h-[61px]">
      <input
        type="text"
        placeholder="Busca un juego..."
        className="flex-1 px-6 py-3 text-base bg-transparent"
        aria-label="Search games"
      />
      <div className="p-3">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="I7:965;52977:33954;51525:5221" layer-name="Icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <path d="M19.6 21.5L13.3 15.2C12.8 15.6 12.225 15.9167 11.575 16.15C10.925 16.3833 10.2333 16.5 9.5 16.5C7.68333 16.5 6.14583 15.8708 4.8875 14.6125C3.62917 13.3542 3 11.8167 3 10C3 8.18333 3.62917 6.64583 4.8875 5.3875C6.14583 4.12917 7.68333 3.5 9.5 3.5C11.3167 3.5 12.8542 4.12917 14.1125 5.3875C15.3708 6.64583 16 8.18333 16 10C16 10.7333 15.8833 11.425 15.65 12.075C15.4167 12.725 15.1 13.3 14.7 13.8L21 20.1L19.6 21.5ZM9.5 14.5C10.75 14.5 11.8125 14.0625 12.6875 13.1875C13.5625 12.3125 14 11.25 14 10C14 8.75 13.5625 7.6875 12.6875 6.8125C11.8125 5.9375 10.75 5.5 9.5 5.5C8.25 5.5 7.1875 5.9375 6.3125 6.8125C5.4375 7.6875 5 8.75 5 10C5 11.25 5.4375 12.3125 6.3125 13.1875C7.1875 14.0625 8.25 14.5 9.5 14.5Z" fill="#49454F"></path> </svg>',
          }}
        />
      </div>
    </div>
  );
}

export default Header;
