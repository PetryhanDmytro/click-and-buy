import React from "react";
import Banner from "../../components/Banner";
import "./HomePageStyles.css";
import PopularCategories from "../../components/PopularCategories";
import PopularProducts from "../../components/PopularProducts";

export default function HomePage() {
  const categories = ["Телефони", "Одяг", "Спорт", "Дім", "Автотовари"];
  const products = [
    {
      id: 1,
      name: "Apple iPhone 13 Pro Max 512GB",
      price: 50999,
      image: "/path/to/iphone.jpg",
    },
    {
      id: 2,
      name: "Puma Graviton Mid",
      price: 1999,
      image: "/path/to/puma.jpg",
    },
    {
      id: 3,
      name: "JBL Tune 720BT Black",
      price: 2399,
      image: "/path/to/jbl.jpg",
    },
    {
      id: 4,
      name: "Лампа Philips H7 Vision",
      price: 222,
      image: "/path/to/philips.jpg",
    },
    {
      id: 5,
      name: "Шуруповерт TexAC TA-01-027",
      price: 2728,
      image: "/path/to/texac.jpg",
    },
    {
      id: 6,
      name: "Набір ножів Tefal Ice Force",
      price: 5199,
      image: "/path/to/tefal.jpg",
    },
    {
      id: 7,
      name: "Годинник GARMIN Fenix 7X",
      price: 38949,
      image: "/path/to/garmin.jpg",
    },
    {
      id: 8,
      name: "Apple iPhone 13 Pro Max 512GB",
      price: 50999,
      image: "/path/to/iphone.jpg",
    },
    {
      id: 9,
      name: "Puma Graviton Mid",
      price: 1999,
      image: "/path/to/puma.jpg",
    },
    {
      id: 10,
      name: "JBL Tune 720BT Black",
      price: 2399,
      image: "/path/to/jbl.jpg",
    },
    {
      id: 11,
      name: "Лампа Philips H7 Vision",
      price: 222,
      image: "/path/to/philips.jpg",
    },
    {
      id: 12,
      name: "Шуруповерт TexAC TA-01-027",
      price: 2728,
      image: "/path/to/texac.jpg",
    },
    {
      id: 13,
      name: "Набір ножів Tefal Ice Force",
      price: 5199,
      image: "/path/to/tefal.jpg",
    },
    {
      id: 14,
      name: "Годинник GARMIN Fenix 7X",
      price: 38949,
      image: "/path/to/garmin.jpg",
    },
  ];
  return (
    <div className="homePage-container">
      <Banner text={"Осінні знижки на всі групи товарів до -50%"} />
      <PopularCategories
        title={"Популярні категорії"}
        categories={categories}
      />
      <PopularProducts title={"Популярні товари"} products={products} />
    </div>
  );
}
