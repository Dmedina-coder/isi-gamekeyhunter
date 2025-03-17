"use client";
import React from "react";

function StoreItem({ isRecommended = false }) {
  return (
    <article className="flex px-5 py-6 mb-6 bg-cyan-950 max-sm:flex-col max-sm:gap-4 max-sm:items-center">
      <div className="flex gap-3.5 items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c3695b93a052d93070c48846c2bc5631dce5e61"
          className="border border-solid border-stone-700 h-[41px] w-[60px]"
          alt="Store logo"
        />
        <h3 className="text-4xl font-bold text-stone-300">Nombre Tienda</h3>
      </div>
      <div className="flex gap-3.5 items-center ml-28 max-md:ml-12">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c3695b93a052d93070c48846c2bc5631dce5e61"
          className="border border-solid border-stone-700 h-[41px] w-[60px]"
          alt="Platform logo"
        />
        <p className="text-4xl font-bold text-stone-300">Plataforma</p>
      </div>
      <div className="px-8 py-5 ml-auto text-4xl font-bold text-white bg-black max-sm:w-full">
        99.99€
      </div>
    </article>
  );
}

export default StoreItem;
