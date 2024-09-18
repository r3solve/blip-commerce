import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import Store from "../../store/Store";
import { FaListUl } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
const Header = () => {
  const [nav, setNav] = useState(false);
  const { cartArray } = Store();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchString, setSearchString] = useState<string>("");
  const navigate = useNavigate();
  const search = () => {
    setSearchParams({ q: searchString });
  };
  return (
    <>
      <nav className="">
        <div className="items-center h-20 hidden px-8 py-4 text-white bg-black lg:flex">
          <Link to="/" className="flex items-center">
            <div className="w-14 rounded-full">
              <img className="" alt="blip logo" src="bplip2.jpeg" />
            </div>
            {/* <BsCart4 className="w-8 h-8 mx-2 text-red-500" /> */}
            <h1>
              <span className="text-2xl mx-4 font-bold text-red-500">
                Blip{" "}
              </span>
            </h1>
          </Link>
          <div className="flex flex-1 items-center px-[3rem] ">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="bg-red-500 p-3 m-1">
                <FaListUl color={"white"} />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content bg-base-100 text-black menu rounded-sm z-[1] w-52 p-2 shadow"
              >
                <Link className="mx-4 my-2" to={"/"}>
                  <a>All</a>
                </Link>
                <Link className="mx-4 my-2" to={"/category/fashion"}>
                  <a>Fashion</a>
                </Link>
                <Link className="mx-4 my-2" to={"/category/home-decor"}>
                  <a>Home Decor</a>
                </Link>
                <Link className="mx-4 my-2" to={"/category/electronics"}>
                  <a>Electronics</a>
                </Link>
              </ul>
            </div>
            <input
              type="text"
              onChange={(e) => setSearchString(e.target.value)}
              placeholder="Search products and categories"
              className="flex-1 h-10 rounded-sm p-4 text-black outline-none "
            />
            <button
              onClick={search}
              className="flex mx-2 items-center h-10 rounded-sm px-3 py-4 text-white bg-red-500"
            >
              SEARCH
            </button>
          </div>
          <div className="flex">
            <Link to="/accounts/login">
              <div className="flex p-2 rounded-sm  w-50 items-center bg-red-500 mx-2">
                <AiOutlineUser size={20} />
                <h1 className=" ">SIGN IN</h1>
              </div>
            </Link>

            <div className="flex items-center mx-2">
              <Link to="/cart" className="flex items-center">
                <span>
                  <AiOutlineShoppingCart size={30} className="text-red-500 " />
                </span>
                <span className="relative flex items-center justify-center w-4 h-4 text-xs text-white rounded-full right-2 bg-stone-700 bottom-2">
                  {cartArray.length}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="flex items-center justify-between p-4 bg-black lg:hidden">
          <Link to="/" className="flex items-center text-xl font-bold ">
            <div className="w-11 mx-1 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="/bplip2.jpeg" />
            </div>
            <h1 className="text-white">Blip Trading</h1>
          </Link>
          <ul
            onClick={() => setNav(!nav)}
            className={`absolute top-[63px] z-20 bg-gray-50 items-center w-full left-0 py-10 text-sky h-80 ${
              nav ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center text-lg h-96">
              <li className="my-3">
                <a href="/#product">Products</a>
              </li>
              <li className="my-3">
                <Link to="/help">Help</Link>
              </li>
              <li className="flex my-3 items-center justify-center w-32 p-2 text-black bg-white rounded-full cursor-pointer">
                <Link to="/accounts/login" className="flex items-center">
                  <AiOutlineUser className="mr-2" /> Sign in
                </Link>
              </li>
              <li className="flex my-3 items-center justify-center w-32 p-2 text-white bg-black rounded-full cursor-pointer">
                <Link to="/cart" className="flex items-center">
                  <AiOutlineShoppingCart className="mr-2" /> Cart
                </Link>
              </li>
            </div>
          </ul>
          <div
            className="block text-3xl text-white lg:hidden"
            onClick={() => setNav(!nav)}
          >
            {!nav ? <CiMenuBurger /> : <TfiClose />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
