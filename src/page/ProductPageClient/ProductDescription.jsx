"use client"

import ProDescription from "@/components/ProDescription";
import ProReviews from "@/components/ProReviews";
import ReviewModel from "@/components/ReviewModel";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ProductDescription = ({product}) => {
  const [activeTab, setActiveTab] = useState("description");
  const [reviews, setReviews] = useState(product.reviews || []);

  // Modal states
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // Handle submit review
  const handleSubmit = () => {
    if (rating === 0 || comment.trim() === "") {
      toast.error("Please give rating and comment!");
      return;
    }

    const newReview = {
      user: "Guest User",
      rating,
      comment,
    };

    setReviews([...reviews, newReview]);
    setRating(0);
    setComment("");
    setIsOpen(false);
  };

  return (
    <div className="pb-12 mt-6">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div>
          {/* Tabs */}
          <div className="flex gap-6 items-center justify-center mb-7">
            <button
              className={`font-semibold text-sm px-4 py-2 rounded-sm duration-300 cursor-pointer ${
                activeTab === "description"
                  ? "bg-[#3BB77E] text-white"
                  : "text-[#253D4E] border border-[#3BB77E] hover:text-[#3BB77E]"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`font-semibold text-sm px-4 py-2 rounded-sm duration-300 cursor-pointer ${
                activeTab === "review"
                  ? "bg-[#3BB77E] text-white"
                  : "text-[#253D4E] border border-[#3BB77E] hover:text-[#3BB77E]"
              }`}
              onClick={() => setActiveTab("review")}
            >
              Review
            </button>
          </div>
          {/* Tab Content */}
          {activeTab === "description" && <ProDescription product={product} />}

          {activeTab === "review" && (
            <ProReviews reviews={reviews} setIsOpen={setIsOpen} />
          )}

          {/* Modal Popup */}
          {isOpen && (
            <ReviewModel
              rating={rating}
              setRating={setRating}
              comment={comment}
              setComment={setComment}
              setIsOpen={setIsOpen}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
