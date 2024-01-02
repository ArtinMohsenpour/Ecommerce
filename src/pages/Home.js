import React from "react";

//useFetch hook
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const { data } = useFetch();
  return <div>Home</div>;
};

export default Home;
