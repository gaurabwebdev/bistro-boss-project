import React from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../Components/Shared/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
  return (
    <div>
      <SectionTitle Heading={"Payment"} />

      <div className="w-2/3 border-2 border-yellow-500 rounded-md p-4 mx-auto ">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
