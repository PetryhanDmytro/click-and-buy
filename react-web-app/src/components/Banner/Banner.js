import React from "react";
import "./BannerStyles.css";
export default function Banner({ text }) {
  return (
    <div className="banner-container">
      <h2 className="banner-text">{text} </h2>
    </div>
  );
}
