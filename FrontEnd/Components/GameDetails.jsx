"use client";
import React from "react";

function GameDetails() {
  return (
    <section className="flex gap-24 px-7 py-6 rounded-xl bg-cyan-950 max-md:flex-col max-md:gap-10 max-md:items-center max-sm:p-4">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ce9275215607e4ee163d65ae42f41b6976b7681"
        className="object-cover h-[345px] w-[230px]"
        alt="Game cover"
      />
      <div className="flex flex-col gap-5 pt-3.5">
        <h1 className="text-4xl font-bold text-neutral-200 max-sm:text-3xl">
          Nombre Videojuego
        </h1>
        <h2 className="text-2xl text-neutral-200 max-sm:text-xl">Plataforma</h2>
        <p className="text-2xl text-neutral-200 max-sm:text-xl">
          Fecha lanzamiento
        </p>
        <p className="text-xl leading-8 text-zinc-500 max-sm:text-base">
          Proin cursus eros velit, at venenatis leo elementum quis. Quisque a
          elit sodales, tincidunt massa eget, commodo justo. Sed ut magna ipsum.
          In interdum a ex eget condimentum. Pellentesque ligula erat, imperdiet
          in iaculis vitae, hendrerit et justo. Etiam vel facilisis sem. Quisque
          accumsan non dolor sit amet finibus. Mauris nec mauris turpis.
        </p>
      </div>
    </section>
  );
}

export default GameDetails;
