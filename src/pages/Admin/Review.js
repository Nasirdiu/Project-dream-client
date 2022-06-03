import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Review = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "ff4a3bca6feff6db86f309b98922d201";
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            ceo: data.ceo,
            message: data.message,
            img: img,
          };
          //send to your database:
          
        }
      });
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10">Review</h1>
      <div>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="text-center mt-16"
        >
          <input
            type="text"
            required
            placeholder="Your Name"
            class="input input-bordered input-md w-full max-w-xs mr-4 "
            {...register("name")}
          />
          <br />
          <br />
          <input
            type="text"
            required
            placeholder="Company’s name, Designation"
            class="input input-bordered input-md w-full max-w-xs mr-4 "
            {...register("ceo")}
          />
          <br />
          <br />
          <input
            type="file"
            required
            placeholder="Image"
            class="input input-bordered input-md w-full max-w-xs mr-4 btn btn-accent "
            {...register("image")}
          />
          <br />
          <br />

          <textarea
            class="textarea textarea-bordered w-96 h-40"
            required
            placeholder="Your Message"
            {...register("message")}
          ></textarea>
          <div class="flex justify-center mt-5 ">
            <button class="btn btn-accent">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
