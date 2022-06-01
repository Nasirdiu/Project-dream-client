import React from "react";

const Contact = () => {
    const handleSublit=event=>{
        event.preventDefault()
    }
  return (
    <div className="mt-40 ">
      <h1 className="text-center text-3xl font-bold">Let us handle your </h1>
      <h1 className="text-center text-3xl font-bold">
        project, professionally.
      </h1>
      <div>
        <form action="" onSubmit={handleSublit} className="text-center mt-16">
          <input
            type="text"
            placeholder="Full Name"
            class="input input-bordered input-md w-full max-w-xs "
          />
          <input
            type="text"
            placeholder="Last Name"
            class="input input-bordered input-md w-full max-w-xs "
          />{" "}
          <br /> <br />
          <input
            type="email"
            placeholder="Email Address"
            class="input input-bordered input-md w-full max-w-xs "
          />
          <input
            type="text"
            placeholder="Phone Number"
            class="input input-bordered input-md w-full max-w-xs "
          />{" "}
          <br /> <br />
          <textarea
            class="textarea textarea-bordered w-96"
            placeholder="Your Message"
          ></textarea>
          <div class="flex justify-center mt-10">
            <button class="btn btn-accent">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
