import React from "react";
import Cover from "../../../Components/Shared/Cover/Cover";
import pizzaCover from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../Hooks/UseMenu/UseMenu";
import MenuItem from "../../Home/MenuSection/MenuItem";
import { Link } from "react-router-dom";

const SaladSection = () => {
  // ${saladCoverContent.coverTitle}
  const [menu] = useMenu("salad");
  const saladCoverContent = {
    img: pizzaCover,
    coverTitle: "salad",
    coverText:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };
  return (
    <div>
      <Cover coverContent={saladCoverContent} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5 px-8 py-10">
        {menu &&
          menu.map((item) => <MenuItem key={item._id} item={item}></MenuItem>)}
      </div>
      <div className="flex justify-center mb-5">
        <Link to={`/shop/${saladCoverContent.coverTitle}`}>
          <button className="px-8 py-5 border-b-2 hover:bg-gray-600 hover:text-white  duration-150 rounded border-gray-500 uppercase text-lg">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SaladSection;
