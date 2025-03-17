import React from "react";

const TestimonialCard = ({ quote, avatarSrc, name, description }) => {
  return (
    <article className="flex flex-col flex-1 shrink p-8 bg-white rounded-xl border border-solid basis-0 border-neutral-200 min-w-60 max-md:px-5">
      <blockquote className="text-2xl text-black">{quote}</blockquote>
      <div className="flex gap-4 items-center self-start mt-12 text-base whitespace-nowrap max-md:mt-10">
        <img
          src={avatarSrc}
          alt={name}
          className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[45px]"
        />
        <div className="self-stretch my-auto">
          <p className="text-black">{name}</p>
          <p className="text-zinc-500">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;