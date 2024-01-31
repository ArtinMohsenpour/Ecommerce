import React, { useContext, useState } from "react";
import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";

//imgaes
import logo from "../img/logo21.png";

// icons
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";

// links
import { Link } from "react-router-dom";

//components
import SearchForm from "../components/SearchForm";
import CategoryNavMobile from "../components/CategoryNavMobile";
import Cart from "../components/Cart";

// cart context
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);
  const [helpIsOpen, setHelpIsOpen] = useState(false);

  const helpHandler = () => {
    setHelpIsOpen(!helpIsOpen);
  };

  return (
    <header className="bg-primary py-3 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0">
          {/**Menu */}
          <div
            onClick={() => setCatNavMobile(true)}
            className="text-3xl xl:hidden cursor-pointer mt-2"
          >
            <FiMenu />
          </div>
          {/* category nav mobile */}
          <div
            className={`${
              catNavMobile ? "left-0" : "-left-full"
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
          >
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          {/* Logo */}
          <Link className="w-[20rem] top-0">
            <img src={logo} alt="company-logo" loading="lazy" />
          </Link>
          {/* search form only show on desktop */}
          <div className="hidden w-full xl:flex xl:max-w-[734px]">
            <SearchForm />
          </div>
          {/* phone and cart */}
          <div className="flex gap-x-[10px] items-center">
            <button
              onClick={helpHandler}
              className="hidden xl:flex uppercase w-[6rem]"
            >
              Need Help?
            </button>

            <div
              onClick={() => setIsOpen(!isOpen)}
              className="relative cursor-pointer felx flex-row"
            >
              <SlBag className="text-2xl" />
              {/*amount/ quantity */}
              <div className="bg-persianyellow text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold translate-[-0.1em]">
                {itemsAmount}
              </div>
            </div>
            {/* cart */}
            <div
              className={`
            ${isOpen ? "right-0" : "-right-full"}
            bg-[#75a4d2] shadow-xl fixed top-0 botton-0 w-full z-10 h-screen md:max-w-[500px] transition-all duration-300`}
            >
              <Cart />
            </div>
            {/* help */}
            <div
              className={`
            ${helpIsOpen ? "right-0" : "-right-full"}
            bg-[#373737] shadow-xl fixed mt-[230px]  pl-6 w-full  z-10 h-[10rem] md:max-w-[400px] transition-all duration-300 rounded-md`}
            >
              <div
                onClick={() => setHelpIsOpen(false)}
                className="text-4xl ml-0 pl-0 w-full h-[70px] z-20 flex hover:text-persianyellow items-center cursor-pointer justify-between "
              >
                <IoClose className="text-xxl" />
                <div className="flex-1 top-8  right-8  left-0 flex  items-center flex-col text-white/30 ">
                  <sapn className="text-2xl mr-11">Help Desk</sapn>
                </div>
              </div>

              <div className="flex">
                <h3 className="text-xl">E-Mail : </h3>
                <p className="text-persianyellow mx-5 text-xl my-auto justify-center text-center">
                  <a href="mailto:mohsenpour.artin@gmail.com">Admin</a>
                </p>
              </div>
              <div className="flex">
                <h3 className="text-xl">Text : </h3>
                <p className="text-persianyellow mx-5 text-xl my-auto justify-center text-center">
                  <a href="https://www.linkedin.com/in/artin-mohsenpour/">
                    Website Owner
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* search form - show on mobile only */}
        <div className="xl:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
