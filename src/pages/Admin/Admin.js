import React from "react";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div class="drawer drawer-mobile mt-10">
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
      
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
  );
};

export default Admin;
