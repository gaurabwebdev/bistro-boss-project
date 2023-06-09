import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/UseAxios/UseAxios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = ({ cart, totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);
  const [transactionId, setTransactionId] = useState("");
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-content", { totalPrice })
        .then((res) => {
          console.log(res);
          if (res.data.clientSecret) {
            setClientSecret(res.data.clientSecret);
          }
        });
    }
  }, [totalPrice]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    console.log(card);

    if (card == null) {
      return;
    }
    setPaymentProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError.message);
    }

    console.log(paymentIntent);
    setPaymentProcessing(false);
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[Payement Method]", paymentMethod);
    }

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        totalPrice,
        date: new Date(),
        quantity: cart?.length,
        productNames: cart?.map((item) => item.name),
        menuProductsId: cart?.map((item) => item.foodId),
        cartProductsId: cart?.map((item) => item._id),
        status: "Delivery Pending",
      };
      // Swal.fire("Payment Completed!", "You clicked the button!", "success");
      axiosSecure.post("/payment", { payment }).then((res) => {
        console.log(res.data);
        if (res.data.insertedResult || res.data.deleteResult) {
          console.log("confirmed");
        }
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-warning btn-sm mt-3"
          type="submit"
          disabled={!stripe || !clientSecret || paymentProcessing}
        >
          Pay
        </button>
        {cardError && <p className="text-xl font-bold mt-5">{cardError}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
