import React, { useState } from 'react'
import './Navbar.css';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [style,setStyle]=useState('input-navbar');

  const changeStyle=()=>{
    if (style !== "input-navbar") setStyle("input-navbar");
    else setStyle("input-navbar2");
  }
  return (
    <>
    <div className='navbar'>
      <FaSearch type='button' className='search-icon' onClick={changeStyle}/>
      <input type='string' className={style} placeholder='SEARCH' onClick={changeStyle}></input>
    </div>
    </>
  );
}

export default Navbar;