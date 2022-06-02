import React from "react";
import { Link, Outlet } from "react-router-dom";
import group from "../../asstes/Image_Icon/Icon/Group.png";
import group1 from "../../asstes/Image_Icon/Icon/Group 1360.png";
import group2 from "../../asstes/Image_Icon/Icon/Group 1368.png";
const Admin = () => {
  return (
    <div class="drawer drawer-mobile mt-10 bg-indigo-50">
      <input id="admin-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-2xl font-bold text-center text-purple-500">
          Welcome to your Admin
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="admin-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          <li>
            <div>
              <img src={group} className="w-5" alt="" />
              <Link to="/admin">Book</Link>
            </div>
          </li>
          <li>
            <div>
              <img src={group1} className="w-5" alt="" />
              <Link to="/admin/booking">Booking</Link>
            </div>
          </li>
          <li>
            <div>
              <img src={group2} className="w-5" alt="" />
              <Link to="/admin/review">Review</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
