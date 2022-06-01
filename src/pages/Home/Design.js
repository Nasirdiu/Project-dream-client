import React from "react";
import pic from "../../asstes/Image_Icon/Image/bernard-hermant-6ftZuO_-b64-unsplash 1.png";
import pic1 from "../../asstes/Image_Icon/Image/Mask Group.png";
import pic2 from "../../asstes/Image_Icon/Image/Mask Group-1.png";
import icon from "../../asstes/Image_Icon/Icon/Group 33011.png";
const Design = () => {
  return (
    <div className="bg-white mt-40 ">
      
      <h1 className="text-3xl font-bold text-center ">
        Discover the latest Interior Design
      </h1>
      <h1 className="text-3xl font-bold text-center">available today</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-12 mt-10">
        <div class="card w-96 ">
          <figure>
            <img className="w-45 h-96 p-30" src={pic} alt="" />
          </figure>
          <div class="card-body">
            <h2 class="card-title font-bold">Villa on Washington Avenue</h2>
            <div className="flex">
              <img className="w-6" src={icon} alt="" />
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div class="card w-96  ">
          <figure>
            <img className="w-45 h-96" src={pic1} alt="" />
          </figure>
          <div class="card-body">
            <h2 class="card-title font-bold">Luxury villa in Rego Park</h2>
            <div className="flex">
              <img className="w-6" src={icon} alt="" />
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div class="card w-96  ">
          <figure>
            <img className="w-45 h-96 p-30" src={pic2} alt="" />
          </figure>
          <div class="card-body">
            <h2 class="card-title font-bold">Gorgeous house</h2>
            <div className="flex">
              <img className="w-6" src={icon} alt="" />
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
