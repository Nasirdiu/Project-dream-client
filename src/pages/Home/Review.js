import React from "react";
import icon from "../../asstes/Image_Icon/Image/Ellipse 90.png";
import icon1 from "../../asstes/Image_Icon/Image/Ellipse 91.png";
import icon2 from "../../asstes/Image_Icon/Image/Ellipse 92.png";
const Review = () => {
  return (
    <div className="mt-40 bg-neutral">
      <h1 className="text-center text-3xl font-bold">Testimonials</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-12 mt-10">
        <div class="card card-side w-96 shadow-xl">
          <figure>
            <img src={icon} className="w-20" alt="" />
          </figure>
          <div class="card-body mt-16">
            <h2 class="card-title font-bold">Nash Patrik</h2>
            <p className="font-bold">CEO, Manpol</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
            <div class="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        <div class="card card-side w-96 shadow-xl">
          <figure>
            <img src={icon1} className="w-20" alt="" />
          </figure>
          <div class="card-body mt-16">
            <h2 class="card-title font-bold">Nash Patrik</h2>
            <p className="font-bold">CEO, Manpol</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
            <div class="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        <div class="card card-side w-96 shadow-xl">
          <figure>
            <img src={icon2} className="w-20" alt="" />
          </figure>
          <div class="card-body mt-16">
            <h2 class="card-title font-bold">Nash Patrik</h2>
            <p className="font-bold">CEO, Manpol</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
            <div class="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
