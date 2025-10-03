import React from "react";
import { FaStar } from "react-icons/fa";

const ProReviews = ({ reviews, setIsOpen }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4 border-b border-b-[#ECECEC] pb-3">
        <h3 className="text-xl font-bold text-[#253D4E] lg:text-2xl">
          Customer Reviews
        </h3>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#3BB77E] text-white px-4 py-2 rounded-md text-sm font-semibold"
        >
          Rate & Review
        </button>
      </div>

      {reviews.length > 0 ? (
        <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {reviews.map((review, idx) => (
            <li key={idx} className="border border-[#ECECEC] p-3 rounded-md">
              <p className="text-sm text-[#253D4E] font-bold">{review.user}</p>
              <div className="flex text-yellow-500 text-sm mb-1">
                {Array.from({ length: review.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-600">{review.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-sm">
          No reviews yet. Be the first to review!
        </p>
      )}
    </div>
  );
};

export default ProReviews;
