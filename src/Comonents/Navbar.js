import React, { useState } from 'react'
//npm i react-icons
// run 28 min
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai";
function Navbar() {
    const[nav,setNav]= useState(false);
    const handleNav = ()=>{
        setNav(!nav);
    };
  return (
    <div className="flex gap-4 text-white justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
     
      <h1
       className={
        !nav 
      ? "w-full text-xl font-bold text-[#8cecff] sm:text-2xl md:text-3xl ease-in-out duration-500"
      :"w-full text-xl font-bold text-[#8cecff] opacity-0 sm:text-2xl md:text-3xl ease-in-out duration-500"}
      >
      Tailwind Cars  

</h1>
    </div>
  )
}

export default Navbar
