import React, { useState } from "react";

//imgaes
import logo from "../img/logo.png";

// icons
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";

// links
import { Link } from "react-router-dom";

//components
import SearchForm from "../components/SearchForm";
import CategoryNavMobile from "../components/CategoryNavMobile";
import Cart from "../components/Cart";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div>
          {/**Menu */}
          <div>
            <FiMenu />
          </div>
          {/* category nav mobile */}
          <div>
            <CategoryNavMobile />
          </div>
          {/* Logo */}
          <Link>
            <img src={logo} />
          </Link>
          {/* search form only show on desktop */}
          <div className="hidden w-full xl:flex xl:max-w-[734px] bg-pink-300">
            search
          </div>
          {/* phone and cart */}
          <div>Need Help? 123 456 789</div>
          <div className="relative cursor-pointer">
            <SlBag />
            {/*amount/ quantity */}
            <div>2</div>
          </div>
          {/* cart */}
          <diV className="bg-[#0e0f10] shadow-xl fixed top-0 botton-0 w-full z-10 md:max-w-[500px] transition-all duration-300">
            <Cart />
          </diV>
        </div>
        {/* search form - show on mobile only */}
        <div className=" lg:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
