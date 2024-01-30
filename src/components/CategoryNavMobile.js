import React from "react";

// icons
import { FiX } from "react-icons/fi";

import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { categories } from "../context/Data";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  //get categories

  //const { data } = useFetch("/categories");
  const data = categories;

  return (
    <div className="w-[18rem] h-auto bg-primary  p-8">
      {/**close icon */}
      <div
        onClick={() => setCatNavMobile(false)}
        className="flex justify-between mb-8 cursor-pointer"
      >
        <h2 className="text-persianyellow text-xl">Categories</h2>
        <div className="justify-end">
          <FiX className="text-3xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-6  ">
        {data?.map((category) => {
          return (
        
            <Link
              className="uppercase font-medium bg-persianyellow text-primary w-[13rem] rounded-sm mx-2 py-1 px-2"
              onClick={() => setCatNavMobile(false)}
              to={`products/${category.id}`}
              key={category.id}
            >
              {category.attributes.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
