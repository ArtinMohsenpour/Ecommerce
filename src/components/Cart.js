import React, { useContext } from "react";
//icons
import { IoArrowForward, IoClose } from "react-icons/io5";
//context
import { CartContext } from "../context/CartContext";

//components
import CartItem from "../components/CartItem";

const Cart = () => {
  const { setIsOpen, cart, total } = useContext(CartContext);
  return (
    <div className="w-full bg-primary h-full px-4 text-white">
      <div className="overflow-y-auto overflow-x-hidden h-[75vh]">
        {/* close button */}
        <div
          onClick={() => setIsOpen(false)}
          className="text-4xl w-20 h-[98px] flex hover:text-persianyellow items-center cursor-pointer justify-start "
        >
          <IoClose />
        </div>
        <div className="flex flex-col gap-y-4 px-2  ">
          {/*  */}
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
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
          <div className="flex justify-between gap-x-4">
            <button className="btn btn-accent hover:bg-persianyellow text-primary ">
              Cancel
            </button>
            <button className="btn btn-accent hover:bg-persianyellow text-primary flex-1 px-2 gap-x-2">
              Checkout
              <IoArrowForward className="text-lg " />
            </button>
          </div>
        ) : (
          <div className="h-full absolute top-0 right-0 left-0 flex  justify-center items-center z-10 flex-col text-white/30">
            <div className="text-2xl">Your cart is empty!</div>
            <div className="text-6xl">Your cart is empty!</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
