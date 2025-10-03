import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewModel = ({
  rating,
  setRating,
  comment,
  setComment,
  setIsOpen,
  handleSubmit,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4 text-[#253D4E]">
          Write a Review
        </h2>

        {/* Rating */}
        <div className="flex gap-2 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`cursor-pointer text-2xl ${
                rating >= star ? "text-yellow-500" : "text-gray-400"
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        {/* Comment */}
        <textarea
          className="w-full border border-gray-300 rounded-md p-2 text-sm mb-3"
          rows="3"
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 text-sm border border-[#ECECEC] rounded-md text-[#253D4E]"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm bg-[#3BB77E] text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModel;
