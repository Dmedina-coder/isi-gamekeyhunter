"use client";
import React from "react";
import StoreItem from "./StoreItem";

function PriceComparison() {
  return (
    <div className="mt-8">
      <section className="pb-6 bg-slate-900">
        <h2 className="px-0 py-5 text-4xl font-black text-center text-stone-300">
          NUESTRA RECOMENDACIÓN
        </h2>
        <StoreItem isRecommended={true} />
      </section>

      <section className="px-0 py-6 bg-slate-900">
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
      </section>
    </div>
  );
}

export default PriceComparison;
