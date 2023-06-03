import React from "react";
import { Helmet } from "react-helmet-async";
import menuCover from "../../../assets/menu/banner3.jpg";

import Cover from "../../../Components/Shared/Cover/Cover";
import OfferSection from "../OfferSection/OfferSection";
import DesertSection from "../DesertSection/DesertSection";
import PizzaSection from "../PizzaSection/PizzaSection";
import SaladSection from "../SaladSection/SaladSection";
import SoupSection from "../SoupSection/SoupSection";

const Menu = () => {
  const menuContent = {
    img: menuCover,
    coverTitle: "Our Menu",
    coverText: "Would you like to try a dish?",
  };

  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Menu</title>
      </Helmet>
      <Cover coverContent={menuContent} height={"700"} />
      <OfferSection />
      <DesertSection />
      <PizzaSection />
      <SaladSection />
      <SoupSection />
    </div>
  );
};

export default Menu;
