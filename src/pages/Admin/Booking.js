import React from "react";
import appement from "../../asstes/Image_Icon/Icon/apartment 1.png";
import appement1 from "../../asstes/Image_Icon/Icon/affordable 1.png";
const Booking = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10">Booking</h1>

      <div className="flex mx-10 gap-11">
        <div class="card w-96 bg-base-100 shadow-xl mt-16 ">
          <div className="flex mt-5">
            <img src={appement} className="w-16 mx-3" alt="" />
            <div class="card-actions justify-end mx-48 ">
              <button className="text-red-500  bg-red-100 w-24 h-10">
                Pending
              </button>
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl mt-16 ">
          <div className="flex mt-5">
            <img src={appement1} className="w-16 mx-3" alt="" />
            <div class="card-actions justify-end mx-48 ">
              <button className="text-green-800  bg-emerald-200 w-24 h-10">
                Done
              </button>
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
