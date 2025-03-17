import React from "react";

function GameItem() {
  return (
    <article className="flex items-center px-3.5 py-2.5 bg-cyan-950 h-[136px] max-sm:flex-col max-sm:p-5 max-sm:h-auto">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f153612f8eedd9c0e1cb28ee38cf2b7ee734573"
        className="border border-solid border-stone-700 h-[118px] w-[172px] max-sm:w-full max-sm:h-auto"
        alt="Game Image"
      />
      <h3 className="ml-48 text-5xl font-semibold text-stone-300 max-md:ml-24 max-md:text-4xl max-sm:text-2xl max-sm:text-center">
        Lorem Ipsum
      </h3>
      <div className="ml-auto h-full text-4xl font-bold text-white bg-black w-[199px] max-sm:mt-5 max-sm:w-full">
        99.99€
      </div>
    </article>
  );
}

export default GameItem;

