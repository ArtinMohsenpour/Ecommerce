import React, { useContext } from "react";
//icons
import { IoClose } from "react-icons/io5";
//context
import { CartContext } from "../context/CartContext";

//components
import CartItem from "../components/CartItem";

const Cart = () => {
  const { setIsOpen, cart } = useContext(CartContext);
  return (
    <div className="w-full bg-primary h-full px-4 text-white">
      <div>
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
    </div>
  );
};

export default Cart;
