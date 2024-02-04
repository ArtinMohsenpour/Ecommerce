import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
//usefetch hook
import useFetch from "../hooks/useFetch";
//components
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
import { categories } from "../context/Data";
import { products } from "../context/Data";

const Products = () => {
  const { id } = useParams();
  const category = categories.filter((category) => category.id == id);

  //get products based on category id
  // const { data } = useFetch(
  //   `/products?populate=*&filters[categories][id][$eq]=${id}`
  // );
  const data = products?.filter(
    (product) => product.attributes.category === category[0].attributes.title
  );
  //console.log(data);
  if (!(data.length > 1)) {
    return (
      <div className="mb-16 pt-40 lg:pt-0">
        <div className="container mx-auto">
          <div className="flex gap-x-[30px] ">
            <CategoryNav />
            <div className="flex-1 container text-center justify-center">
              <p className="text-2xl text-primary bg-persianyellow my-5 py-5  rounded-md h-auto w-auto">
                Currently this category is not available! Please look for other
                categories.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // console.log(data);
  //
  // const [title, setTitle] = useState(null);

  // //set title when data is fetched
  // useEffect(() => {
  //   if (data) {
  //     setTitle(data[0].attributes.categories.data[0].attributes.title);
  //   }
  // });
  const title = data[0].attributes.category;
  //
  return (
    <div className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px] ">
          <CategoryNav />
          <main>
            {/*title */}
            <div className="w-fit bg-persianyellow text-primary font-bold  py-3 mb-2 rounded-md text-xl capitalize  px-3 text-center lg:text-left">
              {title}
            </div>
            {/* product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] mx:gap-[30px]">
              {data?.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
