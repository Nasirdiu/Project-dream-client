import React from 'react';

const Book = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-10">Book</h1>
            <div>
            <form action="" className="text-center mt-16">
          <input
            type="text"
            required
            placeholder="Your Name"
            class="input input-bordered input-md w-full max-w-xs mr-4 "
          />
          <br /><br />
          <input
            type="email"
            required
            placeholder="email"
            class="input input-bordered input-md w-full max-w-xs mr-4 "
          /><br /> <br />
          <input
            type="text"
            required
            placeholder="product name"
            class="input input-bordered input-md w-full max-w-xs mr-4 "
          />
         
          
          
        </form>
            </div>
        </div>
    );
};

export default Book;