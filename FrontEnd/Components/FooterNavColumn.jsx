import React from "react";

function FooterNavColumn({ title, pages }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-base font-bold text-black">{title}</h3>
      {pages.map((page, index) => (
        <a key={index} href="#" className="text-base text-zinc-700">
          {page}
        </a>
      ))}
    </div>
  );
}

export default FooterNavColumn;
