import React from "react";

const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex justify-center items-start gap-2">
      <div>
        <img
          className="w-full h-16 rounded-r-full rounded-b-full "
          src={image}
          alt=""
        />
      </div>
      <div className="ml-5">
        <h3 className="text-2x. font-semibold">{name}------</h3>
        <p>{recipe}</p>
      </div>
      <div>
        <p className="text-yellow-500 text-xl">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
