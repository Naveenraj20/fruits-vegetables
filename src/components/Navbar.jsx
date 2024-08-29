import React, { useCallback, useContext, useState } from "react";
import Sidebar from "./Sidebar";
import AnimatedGif from "./AnimatedGif";
import logo from "../assets/Fresh-point.gif";
import { Link } from "react-router-dom";
import { cartArrayContext } from "../App";



function Navbar() {
  const [sidebarToggle, setSidebarToggle] = useState(false);


  const handleToggleEvent = useCallback(() => {
    switchToggle();
    function switchToggle() {
      setSidebarToggle((e) => !e);
    }
  });

  const {cartValue,searchItem,setSearchItem} = useContext(cartArrayContext)



  


  return (
    <>
      <div className=" flex items-center flex-wrap bg-green-800 top-0 h-20 sticky z-40">
        <div className="lg:p-4 h-14 w-screen lg:flex lg:justify-between">
          <div>
            <div className="top-0 sm:order-2  mx-7 lg:m-0 fixed  w-20">
              <AnimatedGif src={logo} alt="gif" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="lg:p-0 p-4  flex">
              <button onClick={handleToggleEvent}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 lg:hidden w-3"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
              </button>
              <h1 className="lg:text-2xl font-bold"></h1>
            </div>
            <div className="justify-center flex pt-4  px-4">
            <p className="bg-white rounded-s-lg px-2 h-6 lg:hidden ">{cartValue}</p>
            <Link to='/Cart'>
              <div className="flex block">
                <div>
                  <img
                    className="bg-lime-400 rounded-e-lg w-7 h-6  lg:hidden"
                    src="https://img.icons8.com/?size=100&id=LhRbsuC35iCh&format=png&color=000000"
                    alt="cart"
                  />
                </div>
              </div>
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="w-64">
              <Sidebar sidebarToggle={sidebarToggle} />
            </div>

            <div className="flex lg:px-5 w-30 lg:w-auto ">
              <div className="lg:mx-1">
                <label className="lg:h-auto  lg:w-auto  rounded-lg input  flex items-center gap-2   bg-lime-400">
                  <form  onSubmit={async (e) => {
                    e.preventDefault();
                  }}>
                    <input
                      type="text"
                      className="grow rounded-lg p-1 font-semibold px-2 h-5 lg:h-auto"
                      placeholder="Search"
                      value={searchItem}
                      onChange={(e) => setSearchItem(e.target.value)}
                    />
                  </form>
                  <Link to='/Search'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-80"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  </Link>
                </label>
              </div>

                <p className="bg-white rounded-s-lg px-2 h-7 lg:block hidden">{cartValue}</p>
                <Link to='/Cart'>
              <div className="flex sm:hidden lg:block">
                <div>
                  <img
                    className="bg-lime-400 rounded-e-lg w-7 h-7 hidden lg:block"
                    src="https://img.icons8.com/?size=100&id=LhRbsuC35iCh&format=png&color=000000"
                    alt="cart"
                  />
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
