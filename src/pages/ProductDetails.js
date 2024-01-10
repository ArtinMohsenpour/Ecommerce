import React, { useContext } from "react";
//use Params
import { useParams } from "react-router-dom";
//use fetch hook
import useFetch from "../hooks/useFetch";
//components
import RelatedProducts from "../components/RelatedProducts";
//context
import { CartContext } from "../context/CartContext";
//

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();
  //get product data based on id
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  //console.log(data);
  if (!data) {
    return <div className="container mx-auto">Loading...</div>;
  }
  // category title
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex items-center justify-center">
            <img
              src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
              alt=""
              className="w-full max-w-[65%]"
            />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            {/* category title */}
            <div className="uppercase text-lg text-persianyellow font-medium mb-2 ">
              {data[0].attributes.categories.data[0].attributes.title} cameras
            </div>
            {/* title */}
            <h2 className="h2 mb-4">{data[0].attributes.title}</h2>
            {/* description */}
            <p className="mb-12">{data[0].attributes.description}</p>
            {/* price & btn */}
            <div className="flex items-center gap-x-8 mb-4 ">
              {/* price */}
              <div className="text-3xl text-persianyellow">
                €{data[0].attributes.price}
              </div>
              <button
                onClick={() => addToCart(data, id)}
                className="btn bg-persianyellow text-primary "
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* related products */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default ProductDetails;
