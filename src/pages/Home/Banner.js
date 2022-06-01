import React from "react";
import banner from '../../asstes/Image_Icon/Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png'
const Banner = () => {
  return (
    <div class="hero min-h-screen  bg-neutral" >
      <div class="hero-content flex-col lg:flex-row-reverse  mx-40">
        <img
          src={banner}
          class="max-w-sm rounded-lg shadow-2xl" alt=""
        />
        <div>
          <h1 class="text-5xl font-bold">We Build</h1>
          <h1 class="text-5xl font-bold">Your Dream</h1>
          <p class="py-6">
            Online Easte Agency, the mordern way to sell your own home, You can
            use Griffin Residential to market your property
          </p>
          <button class="btn btn-accent text-white">Booking</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
