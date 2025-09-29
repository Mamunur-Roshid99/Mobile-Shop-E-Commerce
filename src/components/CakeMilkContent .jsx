"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CakeMilkContent = ({ onCategoryClick }) => {
const categories = [
  {
    title: "Samsung Galaxy S Series",
    image:
      "https://i.pinimg.com/736x/2f/3c/74/2f3c74388d084283ba63282bd8e00e3c.jpg",
    bgcolor: "#FFFCEB",
    products: [
      {
        image:
          "https://i.pinimg.com/736x/2f/3c/74/2f3c74388d084283ba63282bd8e00e3c.jpg",
        image: "/images/s23.png",
        price: 950,
      },
      {
        image:
          "https://i.pinimg.com/736x/2f/3c/74/2f3c74388d084283ba63282bd8e00e3c.jpg",
        image: "/images/s22.png",
        price: 800,
      },
    ],
  },
  {
    title: "Samsung Galaxy A Series",
    image:
      "https://i.pinimg.com/736x/2f/3c/74/2f3c74388d084283ba63282bd8e00e3c.jpg",
    bgcolor: "#F2FCE4",
    products: [
      {
        title: "Samsung Galaxy A54",
        image:
          "https://i.pinimg.com/736x/2f/3c/74/2f3c74388d084283ba63282bd8e00e3c.jpg",
        price: 450,
      },
      {
        title: "Samsung Galaxy A34",
        image:
          "https://i.pinimg.com/736x/2f/3c/74/2f3c74388d084283ba63282bd8e00e3c.jpg",
        price: 350,
      },
    ],
  },
  {
    title: "Samsung Galaxy M Series",
    image:
      "https://i.pinimg.com/736x/2f/3c/74/2f3c74388d084283ba63282bd8e00e3c.jpg",
    bgcolor: "#ECFFEC",
    products: [
      {
        title: "Samsung Galaxy M14",
        image:
          "https://i.pinimg.com/736x/2f/3c/74/2f3c74388d084283ba63282bd8e00e3c.jpg",
        price: 220,
      },
      {
        title: "Samsung Galaxy M34",
        image:
          "https://i.pinimg.com/736x/2f/3c/74/2f3c74388d084283ba63282bd8e00e3c.jpg",
        price: 300,
      },
    ],
  },
  {
    title: "Samsung Galaxy Z Series",
    image:
      "https://i.pinimg.com/736x/2f/3c/74/2f3c74388d084283ba63282bd8e00e3c.jpg",
    bgcolor: "#FEEFEA",
    products: [
      {
        title: "Samsung Galaxy Z Flip 5",
        image:
          "https://i.pinimg.com/736x/2f/3c/74/2f3c74388d084283ba63282bd8e00e3c.jpg",
        price: 1200,
      },
      {
        title: "Samsung Galaxy Z Fold 5",
    image:
      "https://i.pinimg.com/736x/2f/3c/74/2f3c74388d084283ba63282bd8e00e3c.jpg",
        price: 1600,
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
              className="flex flex-col items-center justify-center rounded-sm border border-[#F4F6FA] pb-5 h-full text-center cursor-pointer"
              style={{ backgroundColor: cat.bgcolor }}
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
