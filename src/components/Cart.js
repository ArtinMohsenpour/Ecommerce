import React, { useContext } from "react";
//icons
import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";
//context
import { CartContext } from "../context/CartContext";

//components
import CartItem from "../components/CartItem";
import { request } from "../request";

//stripe
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

  const stripePromise = loadStripe(
    "pk_test_51OYpcrEPT5nThG7UTgmmOLad2dfjqMkA5hPamx027gpudVDFp6lN5otTxNlFvHPXMHLEhnMl5mtFV65YW9hxkdDV00d12ACDwW"
  );

  const handlePayment = async () => {
    try {
      console.log("function active");
      const stripe = await stripePromise;
      const res = await request.post("/orders", {
        cart,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error.message);
      console.log(error);
      console.error(error.response.data);
    }
  };

  return (
    <div className="w-full bg-primary h-full px-4 text-white z-20">
      <div className=" h-[75vh]">
        {/* close button */}
        <div
          onClick={() => setIsOpen(false)}
          className="text-4xl w-full h-[98px] z-20 flex hover:text-persianyellow items-center cursor-pointer justify-between "
        >
          <IoClose className="text-xxl" />
          <div className="flex-1 top-8  right-8  left-0 flex  items-center flex-col text-white/30 ">
            <sapn className=" mr-11">Your Cart</sapn>
          </div>
        </div>
        <div className="overflow-y-auto  overflow-x-hidden h-[62vh]">
          <div className="flex  flex-col gap-y-4 px-2  ">
            {/*  */}
            {cart.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
      {/* subtotal and total */}
      {cart.length >= 1 && (
        <div className="px-6 py-6 flex flex-col">
          {/* subtotal */}
          <div className="flex justify-between text-lg">
            <div>Subtotal:</div>
            <div>{total}</div>
          </div>
          {/* total */}
          <div className="flex justify-between text-2xl">
            <div>Total:</div>
            <div>€{total}</div>
          </div>
        </div>
      )}
      {/* buttons */}
      <div className="px-6 ">
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4 -mt-3">
            <button
              onClick={() => {
                clearCart();
                setIsOpen(false);
              }}
              className="btn btn-accent hover:bg-persianyellow text-primary"
            >
              Clear Cart
            </button>
            <button
              onClick={handlePayment}
              className="btn btn-accent hover:bg-persianyellow text-primary flex-1 px-2 gap-x-2"
            >
              Checkout
              <IoArrowForward className="text-lg " />
            </button>
          </div>
        ) : (
          <div className="h-full absolute  top-20 right-0 left-0 flex  justify-center items-center -z-1 flex-col text-white/30">
            <div className="text-2xl">Your cart is empty!</div>
            <div className="text-6xl">
              <IoCartOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
