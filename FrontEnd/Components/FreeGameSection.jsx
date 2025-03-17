import React from "react";

function FreeGameSection() {
  return (
    <section className="px-4 py-0 bg-slate-900">
      <h2 className="mb-5 text-4xl font-black text-center text-stone-300">
        JUEGO GRATUITO DE LA SEMANA
      </h2>
      <article className="flex gap-2.5 p-2.5 bg-cyan-950 max-md:flex-col">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/faef41b85294624ca51eb04fca0e62780c87b5eb"
          className="border border-solid rotate-90 border-stone-700 h-[257px] w-[375px] max-md:w-full max-md:h-auto"
          alt="News Image"
        />
        <p className="flex-1 p-7 text-xl leading-8 text-white">
          Mauris leo magna, vulputate nec placerat id, maximus in nibh. Maecenas
          velit est, condimentum eu semper in, gravida eget quam. Praesent
          sagittis sem quis ipsum pellentesque, ut gravida mauris sodales. Cras
          fringilla congue est in finibus. Nullam commodo augue felis, ut
          sollicitudin urna commodo suscipit. Nunc eget velit fringilla,
          ullamcorper urna sed, aliquam leo. Nam diam purus, interdum ac ex nec,
          commodo sagittis nisi. Cras bibendum metus ex, feugiat ullamcorper
          ligula iaculis sit amet. Maecenas interdum libero cursus dignissim
          gravida. Nullam vel dui libero. Donec at dolor tincidunt, pharetra
          risus sit amet, porta leo. Phasellus nulla augue, aliquet nec massa
          eu, tincidunt consequat ex. Nulla sollicitudin interdum velit quis
          rutrum.
        </p>
      </article>
    </section>
  );
}

export default FreeGameSection;
