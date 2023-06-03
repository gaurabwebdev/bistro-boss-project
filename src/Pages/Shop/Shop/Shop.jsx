import React from "react";
import Cover from "../../../Components/Shared/Cover/Cover";
import shopBanner from "../../../assets/shop/banner2.jpg";
import FoodSection from "../FoodSection/FoodSection";
import { Helmet } from "react-helmet-async";

const Shop = () => {
  const shopCover = {
    img: shopBanner,
    coverTitle: "our shop",
    coverText: "Would you like to try a dish?",
  };
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Shop</title>
      </Helmet>
      <Cover coverContent={shopCover} />
      <FoodSection />
    </div>
  );
};

export default Shop;
