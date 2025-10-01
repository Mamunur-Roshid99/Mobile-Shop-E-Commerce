"use client";

import CountdownTimer from "@/components/CountdownTimer";
import { setSelectedProduct } from "@/store/productSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

const hotDeals = [
  {
    title: "iPhone 15 Pro",
    image:
      "https://i.pinimg.com/736x/65/93/97/659397341f357263998a223e7b638045.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "iPhone",
  },
  {
    title: "Realme GT 5",
    image:
      "https://i.pinimg.com/736x/c6/65/36/c66536c98943a4eff1ef3d545a7398ff.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    badge: "Hot",
    category: "realme",
  },
  {
    title: "Vivo X100 Pro",
    image:
      "https://i.pinimg.com/736x/5c/12/58/5c125820694ea3607e953c39eac5b918.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "vivo",
  },
  {
    title: "Tecno X100 Pro",
    image:
      "https://i.pinimg.com/1200x/54/25/e4/5425e42ba53f25ebd85eb8c97d5877eb.jpg",
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    provider: "Hambger Hel",
    discountPercent: "8%",
    category: "vivo",
  },
];

const HeroSection = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className="pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 lg:gap-8">
          {hotDeals.map((item, idx) => (
            <div
              key={idx}
              className="h-[400px] relative lg:h-[420px] cursor-pointer"
              onClick={() => {
                dispatch(setSelectedProduct(item));
                router.push(`/product/${item.id}`);
              }}
            >
              <div className="w-full h-[300px] lg:h-[350px] border border-[#ECECEC] rounded-sm">
                {/* img */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full rounded-sm"
                />
              </div>
              {/* details */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col gap-1 cursor-pointer shadow-md duration-300 mx-5 absolute bottom-4 left-[40%] -translate-x-[45%] w-82">
                <h1 className="text-[#253D4E] font-bold mb-2 lg:text-lg lg:leading-5">
                  {item.title}
                </h1>
                {/* Provider */}
                <div className="flex items-center gap-1 text-[#B6B6B6] text-xs mb-1 font-semibold lg:text-sm">
                  By <p className="text-[#3BB77E]">{item.provider}</p>
                </div>
                {/* Price & Add Button */}
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  {/* price */}
                  <div className="flex items-end gap-3">
                    <span className="text-[#3BB77E] font-bold text-lg border-b-2">
                      {item.discountPrice}
                    </span>
                    <del className="text-[#ADADAD] font-medium text-sm border-b-2 border-b-white">
                      {item.price}
                    </del>
                  </div>
                  {/*  */}
                  <div className="flex gap-2 bg-[#DEF9EC] items-center justify-center rounded-sm py-2 text-[#3BB77E] font-bold cursor-pointer lg:px-3 hover:bg-[#3BB77E] hover:text-white duration-500">
                    <div className="flex items-center justify-center">
                      <IoCartOutline />
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <p>Add</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="absolute top-24 lg:top-40 left-1/2 -translate-x-1/2">
                <CountdownTimer />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
