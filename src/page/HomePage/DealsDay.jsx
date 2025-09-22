
import CountdownTimer from "@/components/CountdownTimer";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

const hotDeals = [
  {
    id: 1,
    title: "Organic Cage Grade A Large Eggs",
    image: "/images/deals.png",
    provider: "Hambger Hel",
    price: "$21.00",
    discountPrice: "$24.00",
  },
  {
    id: 2,
    title: "Organic Cage Grade A Large Eggs",
    image: "/images/deals2.png",
    provider: "Hambger Hel",
    price: "$21.00",
    discountPrice: "$24.00",
  },
  {
    id: 3,
    title: "Organic Cage Grade A Large Eggs",
    image: "/images/deals3.png",
    provider: "Hambger Hel",
    price: "$21.00",
    discountPrice: "$24.00",
  },
  {
    id: 3,
    title: "Organic Cage Grade A Large Eggs",
    image: "/images/deals4.png",
    provider: "Hambger Hel",
    price: "$21.00",
    discountPrice: "$24.00",
  },
];

const DealsDay = () => {
  return (
    <div className="pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        {/*  */}
        <div>
          <h1 className="text-[#253D4E] font-bold text-xl lg:text-3xl">
            Deals Of The Day
          </h1>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 lg:gap-8">
          {hotDeals.map((item) => (
            <div key={item.id} className="h-[400px] relative lg:h-[420px]">
              <div className="w-full h-[300px] lg:h-[350px]">
                {/* img */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>
              {/* details */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col gap-1 cursor-pointer shadow-md duration-300 mx-5 absolute bottom-0 left-4 lg:left-0">
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

export default DealsDay;
