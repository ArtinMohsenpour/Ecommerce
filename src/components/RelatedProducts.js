import React from "react";
// use fetch hook
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
//usefetch hook
//components
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
import { categories } from "../context/Data";
import { products } from "../context/Data";
// components
import ProductSlider from "../components/ProductSlider";

const RelatedProducts = ({ categoryTitle }) => {
  //get products by category title

  // const { data } = useFetch(
  //   `/products?populate=*&filters[categories][title]=${categoryTitle}`
  // );

  // const { id } = useParams();
  // const category = categories.filter((category) => category.id == id);
  const category = categoryTitle;
  //get products based on category id
  // const { data } = useFetch(
  //   `/products?populate=*&filters[categories][id][$eq]=${id}`
  // );
  const data = products?.filter(
    (product) => product.attributes.category === category
  );

  return (
    <div className=" mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>
        <ProductSlider data={data} />
      </div>
    </div>
  );
};

export default RelatedProducts;
