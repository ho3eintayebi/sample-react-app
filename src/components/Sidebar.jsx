
import React, { useState } from 'react'
import './Sidebar.css'
import { HiMenu } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { CiViewTable } from "react-icons/ci";

function Sidebar(){
    const[isOpen,setOpen]=useState(false);
    const[style,setStyle]=useState('sidebar');
    const handleClick=()=>{
        setOpen(!isOpen)
    }
    const changeStyle=()=>{
        console.log('clicked');
        if(style !== "sidebar") setStyle('sidebar');
        else setStyle('sidebar-open');
    };
  return (
        <>
        <div className='sidebar'>
                <div className='menu-btn' >
                    <HiMenu type='button' className='menu-icon' onClick={changeStyle}/>
                </div>
                <div className='home-btn' title='HOME'>
                    <AiFillHome type='button' className='home-icon'/><span>HOME</span>
                </div>
                <div className='user-btn' title='USER PROFILE'>
                    <FaUser type='button' className='user-icon'/><span>USER</span>
                </div>
                <button type='button' className='table-btn' onClick={handleClick} title='TABLES'><div className='table-icon'></div></button>
                {isOpen && <button type='button' className='table2-btn'><CiViewTable className='table2-icon'  /></button>} 
        </div>
        </>
    );
}
export default Sidebar;

