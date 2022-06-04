import React from "react";
const Review = ({reviews}) => {
  const {name,ceo,message,img}=reviews;
  return (
    <div className="mt-16">
      
        <div class="card card-side w-96 shadow-xl">
          <figure>
            <img src={img} className="w-20" alt="" />
          </figure>
          <div class="card-body mt-16">
            <h2 class="card-title font-bold">{name}</h2>
            <p className="font-bold">{ceo}</p>
            <p>
              {message}
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
  );
};

export default Review;
