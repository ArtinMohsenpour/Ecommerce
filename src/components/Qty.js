import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Qty = ({ item }) => {
  const { inputHandler, selectHandler } = useContext(CartContext);

  console.log();

  return (
    <div className="flex gap-x-6 items-center text-primary">
      {item.amount < 10 ? (
        <select
          onChange={(e) => selectHandler(e, item.id)}
          value={item.amount}
          className="p-2 rounded-lg w-[80px] h-10 outline-none text-primary "
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      ) : (
        <input
          onBlur={(e) => inputHandler(e, item.id)}
          className="text-primary placeholder:text-primary h-8 rounded-md p-4 w-[80px] outline-persianyellow"
          type="text"
          placeholder={`${item.amount}`}
        />
      )}
    </div>
  );
};

export default Qty;
