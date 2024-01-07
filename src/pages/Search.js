import React from "react";
// useLocation hook

import { useLocation } from "react-router-dom";

//usefetch
import useFetch from "../hooks/useFetch";

// components
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");
  console.log(searchTerm);
  // get product based on search term
  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );
  console.log(data);
  return <div>Search</div>;
};

export default Search;
