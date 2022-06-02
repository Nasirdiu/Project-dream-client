import React from 'react';

const Review = () => {
    const handleSubmit=event=>{
        event.preventDefault()
    }
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-10">Review</h1>
            <div>
            <form action="" onSubmit={handleSubmit} className="text-center mt-16">
          <input
            type="text"
            required
            placeholder="Your Name"
            class="input input-bordered input-md w-full max-w-xs mr-4 "
          />
          <br /><br />
          <input
            type="text"
            required
            placeholder="Company’s name, Designation"
            class="input input-bordered input-md w-full max-w-xs mr-4 "
          />
          <br /><br />
          <input
            type="file"
            required
            placeholder="Image"
            class="input input-bordered input-md w-full max-w-xs mr-4 btn btn-accent "
          />
          <br /><br />
          
          
          <textarea
            class="textarea textarea-bordered w-96 h-40"
            required
            placeholder="Your Message"
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