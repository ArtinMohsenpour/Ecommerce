import React, { useState } from "react";
//icons
import { FiSearch } from "react-icons/fi";

//use navigate hook
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handkeSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
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
