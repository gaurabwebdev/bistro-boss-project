import React from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../Components/Shared/CheckoutForm/CheckoutForm";
import useCart from "../../../Hooks/UseCart/UseCart";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
  const [cart] = useCart();
  const totalPrice = parseFloat(
    cart.reduce((sum, item) => sum + item.price, 0).toFixed()
  );
  return (
    <div>
      <SectionTitle Heading={"Payment"} />

      <div className="w-2/3  p-4 mx-auto ">
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} totalPrice={totalPrice} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
