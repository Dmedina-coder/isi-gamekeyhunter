import React from "react";

function FreeSection() {
  return (
    <section className="news-section">
      <h2 className="section-title">JUEGO GRATUITO DE LA SEMANA</h2>
      <article className="news-article">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/19ae72ff2779f2f6cd1fd9d5b06347885049c82c8534d15be4b89ace8d3e32a2?placeholderIfAbsent=true&apiKey=f682e8de3cb14cc19333c5fafcca59c5"
          alt="Free game of the week"
          className="news-image"
        />
        <p className="news-content">
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

      <style jsx>{`
        .news-section {
          background-color: rgba(6, 31, 46, 1);
          display: flex;
          margin-top: 27px;
          padding: 0 15px 23px;
          flex-direction: column;
          overflow: hidden;
          align-items: stretch;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
        }

        .section-title {
          color: rgba(197, 197, 197, 1);
          font-size: 36px;
          font-weight: 900;
          text-align: center;
          align-self: center;
          margin: 0;
        }

        .news-article {
          background-color: rgba(2, 56, 68, 1);
          position: relative;
          display: flex;
          min-height: 433px;
          flex-direction: column;
          align-items: start;
          font-size: 20px;
          color: rgba(255, 255, 255, 1);
          font-weight: 400;
          line-height: 30px;
          justify-content: start;
        }

        .news-image {
          aspect-ratio: 0.69;
          object-fit: contain;
          object-position: center;
          width: 257px;
          position: absolute;
          z-index: 0;
          max-width: 100%;
          left: 25px;
          top: 28px;
          height: 375px;
        }

        .news-content {
          position: absolute;
          z-index: 0;
          min-height: 375px;
          width: 50%;
          min-width: 50%;
          max-width: 100%;
          right: 47px;
          top: 28px;
          height: 375px;
          margin: 0;
        }

        @media (max-width: 991px) {
          .news-section {
            max-width: 100%;
          }

          .section-title {
            max-width: 100%;
          }

          .news-article {
            max-width: 100%;
          }

          .news-content {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default FreeSection;
