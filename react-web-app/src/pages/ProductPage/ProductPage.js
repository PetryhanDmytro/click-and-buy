import React from "react";
import "./ProductPageStyles.css";

export default function ProductPage(product) {
  const {
    title = "Смарт-годинник Garmin Fenix 7X Sapphire Solar Black DLC Titanium with Black Band",
    price = "39 986 ₴",
    description = "  Мультиспортивний годинник з GPS-приймачем fēnix 7 Solar впорається з будь-якими вимогами спортсмена або любителя активного відпочинку. Завдяки використанню скла Power GlassTM з підзарядкою від сонця годинник працює довше, дозволяючи вам використовувати просунуті тренувальні функції, спортивні програми, датчики для відстеження параметрів здоров'я та велнесу та інше.",
    alt = "Garmin Fenix 7X Sapphire Solar",
    image,
  } = product;
  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-image-container">
          <img src={image} alt={alt} className="product-image" />
        </div>

        <div className="product-info">
          <h1 className="product-title">{title}</h1>

          <div className="product-price">{price}</div>

          <div className="product-buttons">
            <button className="buy-now-button">Купити зараз</button>
            <button className="add-to-cart-button">Додати в кошик</button>
          </div>

          <div className="product-description">
            <h2>Опис</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
