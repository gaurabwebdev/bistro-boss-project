import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import ChefCard from "../../../Components/Shared/ChefCard/ChefCard";
import useMenu from "../../../Hooks/UseMenu/UseMenu";

const Recommendation = () => {
  const [menu] = useMenu("salad");
  return (
    <div>
      <SectionTitle
        subHeading={"---should try---"}
        Heading={"chef recommends"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-8 p-12">
        {menu &&
          menu
            .slice(0, 3)
            .map((receipe) => (
              <ChefCard key={receipe._id} receipe={receipe}></ChefCard>
            ))}
      </div>
    </div>
  );
};

export default Recommendation;
