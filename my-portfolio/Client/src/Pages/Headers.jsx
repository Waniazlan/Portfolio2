import React from "react";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-scroll';

//className="rounded-2xl py-2 border-white border px-3 cursor-pointer transition  font-semibold  hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-100 mb-4"

export default function Headers(){

    const [menu,setMenu] = useState(false)

    function onToggleMenu(){
        setMenu(!menu)
    }

    return(
        <div className="fixed items-center w-full flex justify-between bg-rose-800 h-[80px] shadow-white ">
                <ul className=" font-bold gap-5 py-4 text-white hidden md:flex ml-auto mr-10 cursor-pointer">                 
                        <li>
                      <Link className="hover:bg-slate-50 hover:px-3 hover:text-black  hover:py-2 rounded-lg  shadow-white  duration-200" to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li>
                      <Link className="hover:bg-slate-50 hover:px-3 hover:text-black  hover:py-2 rounded-lg  shadow-white  duration-200" to="project" smooth={true} duration={500}>Project</Link>
                        </li>
                        <li>
                      <Link className="hover:bg-slate-50 hover:px-3 hover:text-black  hover:py-2 rounded-lg  shadow-white  duration-200" to="skills" smooth={true} duration={500}>Skills</Link>
                        </li>
                        <li>
                      <Link className="hover:bg-slate-50 hover:px-3 hover:text-black  hover:py-2 rounded-lg  shadow-white  duration-200" to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>
                      
                      
                      
                </ul>

            <div className="md:hidden z-10 ml-auto mr-10" onClick={onToggleMenu}>
                {!menu? <MenuIcon /> : <CloseIcon/>}            
            </div>            
                <ul className={!menu? 'hidden' : 'font-bold absolute flex top-0 left-0 gap-4 flex-col items-center justify-center w-full h-screen bg-rose-800 cursor-pointer shadow-white'}>
                        <li>
                      <Link className="hover:bg-slate-50 hover:px-3 hover:py-2 rounded-lg my-2 shadow-white  duration-200" onClick={onToggleMenu} to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li>
                      <Link className="hover:bg-slate-50 hover:px-3 hover:py-2 rounded-lg my-2 shadow-white  duration-200" onClick={onToggleMenu} to="project" smooth={true} duration={500}>Project</Link>
                        </li>
                        <li>
                      <Link className="hover:bg-slate-50 hover:px-3 hover:py-2 rounded-lg my-2 shadow-white  duration-200" onClick={onToggleMenu} to="skills" smooth={true} duration={500}>Skills</Link>
                        </li>
                        <li>
                      <Link className="hover:bg-slate-50 hover:px-3 hover:py-2 rounded-lg my-2 shadow-white  duration-200" onClick={onToggleMenu} to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>             
                </ul>                                     
            </div>
           
     
    )
}