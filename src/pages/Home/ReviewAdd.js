import React, { useEffect, useState } from "react";
import Review from "./Review";

const ReviewAdd = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/review`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="mt-40 bg-neutral">
      <h1 className="text-center text-3xl font-bold">Testimonials</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-12">
          {
              review.slice(-3).map(reviews=><Review key={reviews._id} reviews={reviews}></Review>)
          }
      </div>
    </div>
  );
};

export default ReviewAdd;
