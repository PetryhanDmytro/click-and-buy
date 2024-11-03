import React from "react";
import "./AuthPageStyles.css";

export default function AuthPage() {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <button className="close-button">×</button>
        <h2>Вхід</h2>

        <div className="input-group">
          <label>Телефон</label>
          <input type="tel" placeholder="+38" />
        </div>

        <button className="continue-button">Продовжити</button>

        <div className="divider">
          <span>або</span>
        </div>

        <div className="social-buttons">
          <button className="social-button">
            <img src="/api/placeholder/20/20" alt="Google" />
            Google
          </button>
          <button className="social-button">
            <img src="/api/placeholder/20/20" alt="Apple" />
            Apple
          </button>
        </div>

        <div className="additional-links">
          <button className="link-button">Увійти через Facebook</button>
          <button className="link-button">Увійти через пошту</button>
        </div>
      </div>
    </div>
  );
}
