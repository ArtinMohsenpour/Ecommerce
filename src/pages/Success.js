import React, { useEffect, useState } from "react";

import { BsBagCheckFill } from "react-icons/bs";
import { useContext } from "react";
//components
import { CartContext } from "../context/CartContext";
import { runFireworks } from "../utils/utils";
//pages
import Product from "../components/Product";
import LatestProducts from "../components/LatestProducts";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  useEffect(() => {
    runFireworks();
  }, []);

  return (
    <section>
      <div className="flex flex-col py-16  my-12 mx-auto grad h-auto rounded-[10px] max-w-[360px] md:max-w-lg xl:max-w-[1410px]">
        <div className=" my-12 container mx-auto h-auto justify-center text-center ">
          <div className="flex text-center justify-center items-center">
            <BsBagCheckFill className="text-5xl" /> {/* Adjust the icon size */}
          </div>
          <h1 className="h-auto  x-auto gap-5 text-center mb-4 text-4xl font-bold">
            {" "}
            {/* Adjust the text size */}
            Your payment was successful! Thank you!
          </h1>
          <p className="text-2xl ">
            {" "}
            {/* Adjust the text size */}
            Check your email inbox for the receipt.
          </p>
          <p className="text-lg">
            {" "}
            {/* Adjust the text size */}
            If you have any questions, please email: <br />
            <a
              className="email text-accent"
              href="mailto:mohsenpour.artin@gmail.com"
            >
              mohsenpour.artin@gmail.com
            </a>
          </p>
          <Link to="/" href="/">
            <button className="btn btn-primary text-primary my-5 bg-persianyellow text-lg mx-auto">
              {" "}
              {/* Adjust the button text size */}
              Back to the homepage
            </button>
          </Link>
        </div>
      </div>
      <LatestProducts />
    </section>
  );
};

export default SuccessPage;
