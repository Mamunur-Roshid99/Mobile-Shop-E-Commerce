"use client";

import CountdownTimer from "@/components/CountdownTimer";
import { addToCart } from "@/store/cartSlice";
import { setSelectedProduct } from "@/store/productSlice";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

const hotDeals = [
  {
    title: "Samsung Galaxy S24 Ultra",
    image:
      "https://i.pinimg.com/736x/55/2e/89/552e89221041136fda31d130607d4ce5.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/83/73/41/8373410d50981e10b8c5e83d1fe3f285.jpg",
    thubimg2:
      "https://i.pinimg.com/1200x/35/9c/d1/359cd120e8f516cb50d30349c09303d9.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/04/32/4b/04324b404e3e68b71e91e3518836dcd5.jpg",
    thubimg4:
      "https://i.pinimg.com/1200x/a8/f1/f6/a8f1f6f9db849e8811d521c62ce744b8.jpg",
    description: "Features and Specifications of Samsung Galaxy S24 Ultra",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [
      { user: "jhon", comment: "Great product, loved it!" },
      { user: "dhon", comment: "Battery backup could be better." },
    ],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Samsung",
    discountPercent: "8%",
    badge: "Hot",
    category: "samsung",
  },
  {
    title: "Samsung Galaxy A54",
    image:
      "https://i.pinimg.com/736x/86/51/60/86516007f0deb4bb01515bbf9488268d.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/95/14/a8/9514a8a18f1b1718eaa16c339cb2d86b.jpg",
    thubimg2:
      "https://i.pinimg.com/1200x/3a/59/33/3a593365981a4c9c1fb6cba791272422.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/67/ec/22/67ec225a3d8b5a5e76f14a5640b72da3.jpg",
    thubimg4:
      "https://i.pinimg.com/736x/8b/0e/45/8b0e456f6c2f7e0de9fcb87ddf8d009d.jpg",
    description: "Features and Specifications of Samsung Galaxy A54",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Samsung",
    discountPercent: "8%",
    badge: "Hot",
    category: "samsung",
  },
  {
    title: "iPhone 15 Pro",
    image:
      "https://i.pinimg.com/736x/38/fe/b5/38feb515d9bd99b85fcb252edcbf4edf.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/b2/01/16/b201169858d006ec598e0a67651c9add.jpg",
    thubimg2:
      "https://i.pinimg.com/736x/92/c3/56/92c3569b3dbbf2db67bd144600d59ff7.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/5a/aa/86/5aaa863e7b659d95a8ca05f0d6a9b593.jpg",
    thubimg4:
      "https://i.pinimg.com/1200x/47/b8/41/47b84137ffbfd0b0bdc85c929c115437.jpg",
    description: "Features and Specifications of iPhone 15 Pro",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "",
    category: "iPhone",
  },
  {
    title: "iPhone 14",
    image:
      "https://i.pinimg.com/736x/d9/e3/4e/d9e34e3a48adbfbfe1b3011676a4e813.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/da/96/69/da966934f8966eaac12665a0985d98da.jpg",
    thubimg2:
      "https://i.pinimg.com/736x/17/aa/d5/17aad593348ac5fbd3442a4d382f3010.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/28/75/fe/2875feb2edc07824d2437b828609e75d.jpg",
    thubimg4:
      "https://i.pinimg.com/736x/9e/92/c2/9e92c25266a4cab69fec831952347e90.jpg",
    description: "Features and Specifications of iPhone 14",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "New",
    category: "iPhone",
  },
];

const DealsDay = () => {
  const dispatch = useDispatch();
  const router = useRouter();
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
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addToCart(item));
                      toast.success("Product added to cart!");
                    }}
                    className="flex gap-2 bg-[#DEF9EC] items-center justify-center rounded-sm py-2 text-[#3BB77E] font-bold cursor-pointer lg:px-3 hover:bg-[#3BB77E] hover:text-white duration-500"
                  >
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
