import * as React from "react";
import StoreItem from "./StoreItem";

function StoreList() {
  // Sample store data - in a real app, this would come from props or an API
  const stores = [
    { id: 1, name: "Nombre Tienda", platform: "Plataforma", price: "99.99€", logoUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c3695b93a052d93070c48846c2bc5631dce5e61" },
    { id: 2, name: "Nombre Tienda", platform: "Plataforma", price: "99.99€", logoUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c3695b93a052d93070c48846c2bc5631dce5e61" },
    { id: 3, name: "Nombre Tienda", platform: "Plataforma", price: "99.99€", logoUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c3695b93a052d93070c48846c2bc5631dce5e61" },
    { id: 4, name: "Nombre Tienda", platform: "Plataforma", price: "99.99€", logoUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c3695b93a052d93070c48846c2bc5631dce5e61" },
    { id: 5, name: "Nombre Tienda", platform: "Plataforma", price: "99.99€", logoUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c3695b93a052d93070c48846c2bc5631dce5e61" },
    { id: 6, name: "Nombre Tienda", platform: "Plataforma", price: "99.99€", logoUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c3695b93a052d93070c48846c2bc5631dce5e61" },
    { id: 7, name: "Nombre Tienda", platform: "Plataforma", price: "99.99€", logoUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c3695b93a052d93070c48846c2bc5631dce5e61" },
    { id: 8, name: "Nombre Tienda", platform: "Plataforma", price: "99.99€", logoUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c3695b93a052d93070c48846c2bc5631dce5e61" }
  ];

  return (
    <section className="store-list">
      {stores.map(store => (
        <StoreItem
          key={store.id}
          storeName={store.name}
          platform={store.platform}
          price={store.price}
          storeLogoUrl={store.logoUrl}
          platformLogoUrl={store.logoUrl}
        />
      ))}
      <style jsx>{`
        .store-list {
          padding: 24px 0;
          background-color: #061f2e;
        }
      `}</style>
    </section>
  );
}

export default StoreList;
