import React from "react";
import { Link, Outlet } from "react-router-dom";

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
        <Link to='/admin'>Book</Link>
      </li>
      <li>
        <Link to='/admin/booking'>Booking</Link>
      </li>
      <li>
        <Link to='/admin/review'>Review</Link>
      </li>
     
    </ul>
  </div>
</div>
  );
};

export default Admin;
