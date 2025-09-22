import React from "react";
import { FaStar } from "react-icons/fa";

const topSelling = [
  {
    id: 1,
    title: "Organic Cage Grade A Large Eggs",
    image: "/images/5.png",
    provider: "Hambger Hel",
    price: "$21.00",
    discountPrice: "$24.00",
    rating: 4,
    sold: 5,
  },
  {
    id: 2,
    title: "Organic Cage Grade A Large Eggs",
    image: "/images/8.png",
    provider: "Hambger Hel",
    price: "$21.00",
    discountPrice: "$24.00",
    rating: 4,
    sold: 5,
  },
  {
    id: 3,
    title: "Organic Cage Grade A Large Eggs",
    image: "/images/1.png",
    provider: "Hambger Hel",
    price: "$21.00",
    discountPrice: "$24.00",
    rating: 4,
    sold: 5,
  },
];

const ProductCategorySection = () => {
  return (
    <div className="pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10">
        {/* selling */}
        <div>
          <h1 className="text-[#253D4E] font-bold text-xl lg:text-xl border-b-2 pb-2 border-b-[#BCE3C9]">
            Top Selling
          </h1>
          <div className="flex flex-col gap-7 mt-5">
            {topSelling.map((product) => (
              <div key={product.id} className="flex items-start gap-5">
                {/* img */}
                <div className="w-28 lg:w-36">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full"
                  />
                </div>
                {/* details */}
                <div>
                  <h1 className="text-[#253D4E] font-bold mb-2 lg:text-lg lg:leading-5">
                    {product.title}
                  </h1>
                  {/* rating & sold */}
                  <div className="flex items-center gap-2 mb-1">
                    {/* rating */}
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`h-3 w-3 ${
                            i < product.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    {/* sold */}
                    <div className="text-xs text-[#B6B6B6]">{product.sold}</div>
                  </div>
                  {/* price */}
                  <div className="flex items-end gap-3">
                    <span className="text-[#3BB77E] font-bold text-lg border-b-2">
                      {product.discountPrice}
                    </span>
                    <del className="text-[#ADADAD] font-medium text-sm border-b-2 border-b-white">
                      {product.price}
                    </del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Recently added */}
        <div>
          <h1 className="text-[#253D4E] font-bold text-xl lg:text-xl border-b-2 pb-2 border-b-[#BCE3C9]">
            Recently added
          </h1>
          <div className="flex flex-col gap-7 mt-5">
            {topSelling.map((product) => (
              <div key={product.id} className="flex items-start gap-5">
                {/* img */}
                <div className="w-28 lg:w-36">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full"
                  />
                </div>
                {/* details */}
                <div>
                  <h1 className="text-[#253D4E] font-bold mb-2 lg:text-lg lg:leading-5">
                    {product.title}
                  </h1>
                  {/* rating & sold */}
                  <div className="flex items-center gap-2 mb-1">
                    {/* rating */}
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`h-3 w-3 ${
                            i < product.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    {/* sold */}
                    <div className="text-xs text-[#B6B6B6]">{product.sold}</div>
                  </div>
                  {/* price */}
                  <div className="flex items-end gap-3">
                    <span className="text-[#3BB77E] font-bold text-lg border-b-2">
                      {product.discountPrice}
                    </span>
                    <del className="text-[#ADADAD] font-medium text-sm border-b-2 border-b-white">
                      {product.price}
                    </del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Top Rated */}
        <div>
          <h1 className="text-[#253D4E] font-bold text-xl lg:text-xl border-b-2 pb-2 border-b-[#BCE3C9]">
            Top Rated
          </h1>
          <div className="flex flex-col gap-7 mt-5">
            {topSelling.map((product) => (
              <div key={product.id} className="flex items-start gap-5">
                {/* img */}
                <div className="w-28 lg:w-36">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full"
                  />
                </div>
                {/* details */}
                <div>
                  <h1 className="text-[#253D4E] font-bold mb-2 lg:text-lg lg:leading-5">
                    {product.title}
                  </h1>
                  {/* rating & sold */}
                  <div className="flex items-center gap-2 mb-1">
                    {/* rating */}
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`h-3 w-3 ${
                            i < product.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    {/* sold */}
                    <div className="text-xs text-[#B6B6B6]">{product.sold}</div>
                  </div>
                  {/* price */}
                  <div className="flex items-end gap-3">
                    <span className="text-[#3BB77E] font-bold text-lg border-b-2">
                      {product.discountPrice}
                    </span>
                    <del className="text-[#ADADAD] font-medium text-sm border-b-2 border-b-white">
                      {product.price}
                    </del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategorySection;
