import React from "react";

//components

//pages
import Product from "../components/Product";
import LatestProducts from "../components/LatestProducts";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <section>
      <Hero />
      <LatestProducts />
    </section>
  );
};

export default Home;
