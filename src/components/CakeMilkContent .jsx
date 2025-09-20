"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CakeMilkContent = ({ onCategoryClick }) => {
  const categories = [
    {
      title: "Chocolate Cake",
      image: "/images/1.png",
      products: [
        {
          title: "Choco Slice",
          image: "/images/1.png",
          price: 250,
        },
        {
          title: "Choco Roll",
          image: "/images/1.png",
          price: 300,
        },
      ],
    },
    {
      title: "Vanilla Cake",
      image: "/images/1.png",
      products: [
        {
          title: "Vanilla Slice",
          image: "/images/1.png",
          price: 200,
        },
        {
          title: "Vanilla Roll",
          image: "/images/1.png",
          price: 220,
        },
      ],
    },
    {
      title: "Strawberry Milkshake",
      image: "/images/1.png",
      products: [
        {
          title: "Strawberry Shake",
          image: "/images/1.png",
          price: 180,
        },
        {
          title: "Strawberry Ice Cream",
          image: "/images/1.png",
          price: 150,
        },
      ],
    },
    {
      title: "Chocolate Cake",
      image: "/images/1.png",
      products: [
        {
          title: "Choco Slice",
          image: "/images/1.png",
          price: 250,
        },
        {
          title: "Choco Roll",
          image: "/images/1.png",
          price: 300,
        },
      ],
    },
    {
      title: "Vanilla Cake",
      image: "/images/1.png",
      products: [
        {
          title: "Vanilla Slice",
          image: "/images/1.png",
          price: 200,
        },
        {
          title: "Vanilla Roll",
          image: "/images/1.png",
          price: 220,
        },
      ],
    },
    {
      title: "Strawberry Milkshake",
      image: "/images/1.png",
      products: [
        {
          title: "Strawberry Shake",
          image: "/images/1.png",
          price: 180,
        },
        {
          title: "Strawberry Ice Cream",
          image: "/images/1.png",
          price: 150,
        },
      ],
    },
    {
      title: "Chocolate Cake",
      image: "/images/1.png",
      products: [
        {
          title: "Choco Slice",
          image: "/images/1.png",
          price: 250,
        },
        {
          title: "Choco Roll",
          image: "/images/1.png",
          price: 300,
        },
      ],
    },
    {
      title: "Vanilla Cake",
      image: "/images/1.png",
      products: [
        {
          title: "Vanilla Slice",
          image: "/images/1.png",
          price: 200,
        },
        {
          title: "Vanilla Roll",
          image: "/images/1.png",
          price: 220,
        },
      ],
    },
    {
      title: "Strawberry Milkshake",
      image: "/images/1.png",
      products: [
        {
          title: "Strawberry Shake",
          image: "/images/1.png",
          price: 180,
        },
        {
          title: "Strawberry Ice Cream",
          image: "/images/1.png",
          price: 150,
        },
      ],
    },
  ];

  return (
    <div className="h-[170px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={3}
        breakpoints={{ 768: { slidesPerView: 4 }, 1024: { slidesPerView: 8 } }}
        className="relative h-full"
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="bg-[#F2FCE4] flex flex-col items-center justify-center rounded-sm border border-[#F4F6FA] pb-5 h-full text-center cursor-pointer"
              onClick={() => onCategoryClick(cat.products)}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-16 h-16 object-cover mb-2 rounded"
              />
              <h1 className="text-[#253D4E] font-bold text-sm">{cat.title}</h1>
              <p className="text-[#7E7E7E] font-semibold text-sm">
                {cat.products.length} items
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CakeMilkContent;
