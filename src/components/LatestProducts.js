import React from "react";
import ProductSlider from "../components/ProductSlider";

//useFetch hook
import useFetch from "../hooks/useFetch";
import { products } from "../context/Data";

const LatestProducts = () => {
  //get new products
  //const { data } = useFetch("/products?populate=*&filters[isNew]=true");
  const data = products;

  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Latest Products</h2>
      </div>
      <ProductSlider data={data} />
      {!data && (
        <div className="container flex bg-red-500 text center justify-center items-center mx-auto px-2 py-2 rounded-lg ">
          <p className="text-center text-2xl ">
            Currently backend server is offline! please try again later.
          </p>
        </div>
      )}
    </div>
  );
};

export default LatestProducts;
