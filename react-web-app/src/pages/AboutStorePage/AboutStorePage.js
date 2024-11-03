import React from "react";
import "./AboutStorePageStyles.css";

export default function AboutStorePage() {
  return (
    <div className="about-page">
      <h1 className="page-title">Click & Buy</h1>
      <h2 className="text-title">Про нас</h2>
      <div className="content-wrapper">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Контакти:</h2>
          <ul>
            <li>Адреса: вул. Центральна, 123, м. Київ, 01001</li>
            <li>Телефон: +38 (044) 555-1234</li>
            <li>
              Email: <a href="">info@clickandbuy.com.ua</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
