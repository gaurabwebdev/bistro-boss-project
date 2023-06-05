import React from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/UseMenu/UseMenu";
import ItemTable from "../ItemTable/ItemTable";

const ManageItem = () => {
  const [, menu] = useMenu();
  return (
    <div>
      <SectionTitle
        subHeading={"---Hurry Up---"}
        Heading={"Manage All Items"}
      />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-5">Total Items : {menu.length}</h2>
        <ItemTable />
      </div>
    </div>
  );
};

export default ManageItem;
