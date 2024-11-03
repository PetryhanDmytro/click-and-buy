import React from "react";
import "./FilterStyles.css";

export default function Filters() {
  return (
    <aside className="filters">
      <h2>Фільтри</h2>

      <FilterSection
        title="Категорія"
        options={[
          { label: "Телефони" },
          { label: "Одяг" },
          { label: "Спорт" },
          { label: "Дім" },
          { label: "Автотовари" },
        ]}
      />

      <FilterSection
        title="Ціна"
        options={[
          { label: "Від дешевих до дорогих" },
          { label: "Від дорогих до дешевих" },
        ]}
      />

      <FilterSection
        title="Бренд"
        options={[
          { label: "Garmin" },
          { label: "JBL" },
          { label: "Tefal" },
          { label: "TexAc" },
          { label: "Philips" },
        ]}
      />
    </aside>
  );
}

function FilterSection({ title, options }) {
  return (
    <div className="filter-section">
      <h3>{title}</h3>
      {options.map((option, index) => (
        <label key={index} className="checkbox-label">
          <input type="checkbox" onChange={() => {}} />
          {option.label}
        </label>
      ))}
    </div>
  );
}
