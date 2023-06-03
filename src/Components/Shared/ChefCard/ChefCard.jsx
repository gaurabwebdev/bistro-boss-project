import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/UseCart/UseCart";

const ChefCard = ({ receipe, showPrice }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const { image, name, recipe, price, _id } = receipe;
  const location = useLocation();
  const addToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        foodId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch(`http://localhost:5000/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food Added To Cart",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
    } else {
      Swal.fire({
        title: "Please Login First!",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Login Now",
        denyButtonText: `Not Now`,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-gray-200 shadow-xl">
      <figure className="relative">
        <img className="w-full" src={image} alt="recipe-picture" />
        {showPrice && (
          <button className="btn btn-danger absolute top-3 right-3">
            ${price}
          </button>
        )}
      </figure>
      <div className="card-body items-center gap-4">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => addToCart(receipe)}
            className="px-8 py-4 border-b-2 hover:bg-gray-600 font-semibold  duration-150 rounded border-yellow-600 uppercase text-lg text-yellow-600"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
