import * as React from "react";

function StoreItem({ storeName, platform, price, storeLogoUrl, platformLogoUrl }) {
  return (
    <div className="store-item">
      <div className="store-details">
        <img
          src={storeLogoUrl}
          alt="Store logo"
          className="store-logo"
        />
        <span className="store-name">{storeName}</span>
      </div>
      <div className="platform-details">
        <img
          src={platformLogoUrl}
          alt="Platform logo"
          className="platform-logo"
        />
        <span className="platform-name">{platform}</span>
      </div>
      <div className="price">{price}</div>
      <style jsx>{`
        .store-item {
          display: flex;
          padding: 24px 24px;
          padding-Right: 0px;
          margin-bottom: 22px;
          background-color: #023844;
        }
        .store-details {
          display: flex;
          align-items: center;
          gap: 13px;
        }
        .store-logo {
          width: 60px;
          height: 41px;
          border: 1px solid #433b3b;
        }
        .store-name {
          color: #c5c5c5;
          font-family: "Inter", sans-serif;
          font-size: 20px;
          font-weight: 700;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-weight: 600;
          letter-spacing: -0.96px;
          margin: 0; /* Remove auto margins */
          text-align: left; /* Align text to the left */
        }
        .platform-details {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-left: 113px;
        }
        .platform-logo {
          width: 60px;
          height: 41px;
          border: 1px solid #433b3b;
        }
        .platform-name {
 color: #c5c5c5;
          font-family: "Inter", sans-serif;
          font-size: 20px;
          font-weight: 700;
          font-family:
            Inter,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-weight: 600;
          letter-spacing: -0.96px;
          margin: 0; /* Remove auto margins */
          text-align: left; /* Align text to the left */
        }
        .price {
          color: #fff;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 700;
          width: 80px;
          height: 100%;
          padding: 20px 20px;
          background-color: #000;
          clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%); /* Creates a diagonal left border */
          text-align: right; /* Align text to the right */
          display: flex;
          align-items: center;
          justify-content: flex-end; /* Ensure content is aligned to the right */
        }
        @media (max-width: 991px) {
          .platform-details {
            margin-left: 50px;
          }
        }
        @media (max-width: 640px) {
          .store-item {
            flex-direction: column;
            gap: 15px;
            align-items: center;
          }
          .platform-details {
            margin-left: 0;
          }
          .price {
            width: 100%;
            text-align: center;
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default StoreItem;
