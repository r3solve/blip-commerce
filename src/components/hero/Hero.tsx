import React from "react";
import { FaListUl } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const Hero = () => {
  return (
    <div className="w-full flex items-center  bg-center lg:bg-top bg-fixed  bg-my-image h-[250px]">
      <div className="w-full  lg:hidden flex items-center justify-center ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="bg-red-500 p-3 m-1">
            <FaListUl color={"white"} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-100 text-black menu rounded-sm z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>All</a>
            </li>
            <li>
              <a>Fashion</a>
            </li>
            <li>
              <a>Home Decor</a>
            </li>
            <li>
              <a>Electronics</a>
            </li>
          </ul>
        </div>
        <input
          type="text"
          placeholder="Search products and categories"
          className="flex-1 h-10 rounded-sm p-4 text-black outline-none "
        />
        <button className="flex mx-2 items-center h-10 rounded-sm px-3 py-4 text-white bg-red-500">
          <CiSearch />
        </button>
      </div>
    </div>
  );
};

export default Hero;
