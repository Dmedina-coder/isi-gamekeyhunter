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
          padding: 24px 20px;
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
          font-size: 36px;
          font-weight: 700;
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
          font-size: 36px;
          font-weight: 700;
        }
        .price {
          margin-left: auto;
          color: #fff;
          font-family: "Inter", sans-serif;
          font-size: 40px;
          font-weight: 700;
          padding: 20px 32px;
          background-color: #000;
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
