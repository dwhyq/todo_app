import React from "react";
import { FiSearch } from "react-icons/fi";


const Navbar = () =>{ 
  
  return (
  <div className="">
    <nav className="fixed bg-gray-100 w-full mx-auto flex justify-between items-center p-1 ">
      <span className="flex justify-between p-2 items-center sm-sc:text-md">
        <h1 className="text-1xl sm:text-xl sm-sc:text-sm md:lg:text-4xl px-1 font-bold">TODO APP</h1>
      </span> 
      {/* <div className="bg-white rounded-full outline-none border-2 flex justify-between items-center p-1 px-2 sm:text-1xl sm-sc:text-sm sm-sc:w-[250px] md:lg:text-2xl sm:w-[400px] lg:w-[500px] cursor-pointer">
          <input type="search" className="rounded-full outline-none w-full" />
          <FiSearch className="cursor-pointer"/>
        </div> */}
    </nav>
  </div>
)};

export default Navbar;
