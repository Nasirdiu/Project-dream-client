import React from "react";
import office from "../../asstes/Image_Icon/Icon/apartment 1.png";
import office1 from "../../asstes/Image_Icon/Icon/affordable 1.png";
import office2 from "../../asstes/Image_Icon/Icon/lessee 1.png";
const Services = () => {
  return (
    <div className=" bg-white mt-40">
      
      <h1 className="text-3xl font-bold text-center">
        We're an agency tailored to all
      </h1>
      <h1 className="text-3xl font-bold text-center">
        clients' needs that always delivers
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-12 mt-10">
        <div class="card w-96 shadow-xl">
          <figure>
            <img className="w-25 h-24" src={office} alt="" />
          </figure>
          <div class="card-body">
            <h2 class="font-bold text-center">Office Interior Design</h2>
            <p className="text-accent text-center font-bold">$299</p>
            <p className="text-center">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
          </div>
        </div>
        <div class="card w-96  shadow-xl">
          <figure>
            <img className="w-25 h-24" src={office1} alt="" />
          </figure>
          <div class="card-body">
          <h2 class="font-bold text-center">Showroom Design</h2>
            <p className="text-accent text-center font-bold">$399</p>
            <p className="text-center">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
          </div>
        </div>
        <div class="card w-96  shadow-xl">
          <figure>
            <img className="w-25 h-24 " src={office2} alt="" />
          </figure>
          <div class="card-body">
          <h2 class="font-bold text-center">Residential/ Home</h2>
            <p className="text-accent text-center font-bold">$499</p>
            <p className="text-center">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-16">
      <button class="btn btn-accent">Explore more</button>
    </div>
    </div>
  );
};

export default Services;
