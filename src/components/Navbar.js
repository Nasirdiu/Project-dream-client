import React from "react";
import { Link } from "react-router-dom";
import icon from '../asstes/Image_Icon/Group 33069.png'
const Navbar = () => {
    const menu=(
        <>
        <li>
            <Link to='/home'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About Us</Link>
        </li>
        <li>
            <Link to='/project'>Projects</Link>
        </li>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
        <li>
            <Link to='/admin'>Admin</Link>
        </li>
        </>
    )
        
    
  return (
    <div class="navbar bg-neutral  mx-auto">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
           {menu}
          </ul>
        </div>
       <img src={icon} className="w-20" alt="" />
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
        {menu}
        </ul>
      </div>
      <div class="navbar-end"> 
      <button class="btn btn-sm btn-accent text-white">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
