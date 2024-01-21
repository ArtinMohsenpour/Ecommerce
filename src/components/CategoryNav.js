import React from "react";
import { Link } from "react-router-dom";
//use fetch
import useFetch from "../hooks/useFetch";

const CategoryNav = () => {
  const { data } = useFetch("/categories");

  return (
    <aside className="hidden xl:flex">
      <div className="bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px]  overflow-hidden">
        <div className="bg-persianyellow py-4 text-primary text-center uppercase font-semibold items-center justify-center justify-items-center">
          Browse Categories
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {data?.map((category) => {
            return (
              <Link
                to={`/products/${category.id}`}
                key={category.id}
                className="capitalize cursor-pointer"
              >
                {category.attributes.title}
              </Link>
            );
          })}
          {!data && (
            <div className="container flex bg-red-500 text center justify-center items-center mx-auto px-2 py-2 rounded-lg ">
              <p className="text-center ">
                Currently backend server is offline! please try again later.
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
