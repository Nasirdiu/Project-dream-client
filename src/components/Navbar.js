import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import icon from "../asstes/Image_Icon/Group 33069.png";
import auth from "../firebase.init";
const Navbar = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const handle = () => {
    navigate("/login");
  };
  const menu = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/project">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </>
  );

  return (
    <div class="navbar bg-neutral  mx-auto">
      <div class="navbar-start mx-32">
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
        <ul class="menu menu-horizontal p-0">{menu}</ul>
      </div>
      <div class="navbar-end mx-32">
        {
          user?(<button onClick={logout} className='btn btn-sm btn-accent text-white'>SingOut</button>):
          <button onClick={handle} class="btn btn-sm btn-accent text-white">
            Login
          </button>
        }
      </div>
    </div>
  );
};

export default Navbar;
