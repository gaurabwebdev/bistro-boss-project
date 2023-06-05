import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import useCart from "../../Hooks/UseCart/UseCart";
import ProductTable from "./ProductTable/ProductTable";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart] = useCart();
  const totalPrice = cart
    .map((cartItem) => cartItem.price)
    .reduce((acc, currentVal) => {
      return acc + currentVal;
    }, 0);
  console.log(totalPrice);
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | My Cart</title>
      </Helmet>
      <div className="w-full">
        <SectionTitle
          subHeading={"---Hurry Up---"}
          Heading={"Manage All Items"}
        />
      </div>
      <div className="m-5 px-5 py-3 shadow-xl  uppercase">
        <div className="flex justify-between">
          <h2 className="text-2xl text-gray-500 ">
            Total Items : {cart.length}
          </h2>
          <h2 className="text-2xl text-gray-500">
            Total Price : ${totalPrice}
          </h2>
          <Link to={"/dashboard/payment"}>
            <button className="btn btn-sm">Pay</button>
          </Link>
        </div>
        <div className="mt-5">
          <ProductTable totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default MyCart;
