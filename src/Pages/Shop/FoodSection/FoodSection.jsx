import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./FoodSection.css";
import useMenu from "../../../Hooks/UseMenu/UseMenu";
import ChefCard from "../../../Components/Shared/ChefCard/ChefCard";
import { useParams } from "react-router-dom";

const FoodSection = () => {
  const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
  const { category } = useParams();
  const currentIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(currentIndex);
  const [, menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div className="max-w-4xl mx-auto my-16">
      <Tabs default={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="grid grid-cols-3 lg:grid-cols-5 grid-rows-2 lg:grid-rows-1 p-6 lg:p-0">
          <Tab>
            <h2 className="uppercase text-center">Salad</h2>
          </Tab>
          <Tab>
            <h2 className="uppercase text-center">Pizza</h2>
          </Tab>
          <Tab>
            <h2 className="uppercase text-center">Soups</h2>
          </Tab>
          <Tab>
            <h2 className="uppercase text-center">Desserts</h2>
          </Tab>
          <Tab>
            <h2 className="uppercase text-center">Drinks</h2>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 m-5 px-8 py-10">
            {salad.map((item) => (
              <ChefCard
                key={item._id}
                receipe={item}
                showPrice={true}
              ></ChefCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5 px-8 py-10">
            {pizza.map((item) => (
              <ChefCard
                key={item._id}
                receipe={item}
                showPrice={true}
              ></ChefCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5 px-8 py-10">
            {soup.map((item) => (
              <ChefCard
                key={item._id}
                receipe={item}
                showPrice={true}
              ></ChefCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5 px-8 py-10">
            {dessert.map((item) => (
              <ChefCard
                key={item._id}
                receipe={item}
                showPrice={true}
              ></ChefCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5 px-8 py-10">
            {drinks.map((item) => (
              <ChefCard
                key={item._id}
                receipe={item}
                showPrice={true}
              ></ChefCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default FoodSection;
