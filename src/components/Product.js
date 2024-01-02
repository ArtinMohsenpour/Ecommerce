import React from "react";
//link
import { Link } from "react-router-dom";


const Product = ({ product }) => {
  console.log(product);
  return (
    <Link to={`/product/${product.id}`}>
      <div className="group grad w-full h-[362px] rounded-[10px] overflow-hidden relative ">
        {/*badge */}
        {product.attributes.isNew ? (
          <div className="absolute bg-persianyellow text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
            new
          </div>
        ) : (
          ""
        )}

        {/*image */}
        <div className="w-full h-[200px] flex items-center justify-center relative ">
          <img
            className="w-[160px] h-[160px] group-hover:scale-90 transition-all"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div>
        {/* text */}
        <div className="px-6 flex flex-col pb-8">
          {/* categoty title */}
          <div className="capitalize text-sm text-persianyellow  mb-2">
            {product.attributes.categories.data[0].attributes.title}
          </div>
          {/* title */}
          <div className="text-[15px] mb-4 lg:mb-9">
            {product.attributes.title.substring(0, 35)}...
          </div>
          {/* price */}
          <div className="text-lg text-persianyellow">
            €{product.attributes.price}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
