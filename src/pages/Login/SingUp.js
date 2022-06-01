import React from 'react';
import { Link } from 'react-router-dom';
import google from "../../asstes/Image_Icon/Icon/Group 573.png";
const SingUp = () => {
    return (
        <div className="flex justify-center items-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Create an account</h2>
  
  
  
  
  
            <p>
              <small>
                Don’t have an account?
                <Link to="/login" className="text-accent">
                  login account
                </Link>
              </small>
            </p>
  
            <div className="divider">OR</div>
            <button
              // onClick={() => signInWithGoogle()}
              className="btn btn-accent text-white"
            >
              <img src={google} className="w-6 mr-10 " alt="" />
              <span className="ml-5">Continue with google</span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default SingUp;