import React, { useEffect, useState } from "react";
//icons
import { FiSearch } from "react-icons/fi";

//use navigate hook
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const handkeSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    // clear timeout event
    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      document.querySelector("input").value = "";
      setSearchTerm("");
    } else {
      // if input is empty set animation to true

      console.log("Please search for somthing");
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" w-full relative">
      <input
        onChange={handkeSearchInput}
        className="input "
        type="text "
        placeholder="Search for a product..."
      />
      <button className="btn bg-persianyellow absolute top-0 right-0 rounded-tl-none rounded-bl-none">
        <FiSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchForm;
