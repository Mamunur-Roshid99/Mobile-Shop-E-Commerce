"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 lg:flex lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          pagination={{ el: ".custom-pagination", clickable: true }}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1}
          className="relative rounded-2xl h-[360px] lg:w-[70%] mb-8 w-full lg:h-[500px]"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="h-full w-full">
              <img
                src="https://i.pinimg.com/736x/c4/b1/51/c4b151e777f49ee3374ee7fa08812400.jpg"
                alt="Hero"
                className="h-full w-full"
              />
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="h-full w-full">
              <img
                src="https://i.pinimg.com/736x/08/7c/28/087c28bc484015c6b102e275ffe325cd.jpg"
                alt="Hero"
                className="h-full w-full"
              />
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="h-full w-full">
              <img
                src="https://i.pinimg.com/1200x/e4/49/3f/e4493f192538061d600f1aae4cfb742f.jpg"
                alt="Hero"
                className="h-full w-full"
              />
            </div>
          </SwiperSlide>

          {/* Custom Controls INSIDE Swiper */}
          <div className="absolute inset-x-0 left-1/2 top-1/2 -translate-x-1/2 flex items-center justify-between px-2 z-50 w-full">
            <button className="custom-swiper-prev bg-[#F2F3F4] text-[#7E7E7E] size-8 lg:size-10 flex items-center justify-center text-2xl rounded-full cursor-pointer duration-500 hover:bg-[#3BB77E] hover:text-white">
              <MdKeyboardArrowLeft />
            </button>
            <button className="custom-swiper-next bg-[#F2F3F4] text-[#7E7E7E] size-8 lg:size-10 flex items-center justify-center text-2xl rounded-full cursor-pointer duration-500 hover:bg-[#3BB77E] hover:text-white">
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
          <div className="custom-pagination flex gap-2 absolute inset-x-0 bottom-4 z-50 items-center justify-center"></div>
        </Swiper>
        <div className="lg:w-[30%] flex gap-5 flex-row items-start justify-between lg:flex-col lg:h-[500px]">
          <div className="rounded-2xl w-full h-40 lg:h-58">
            <img
              src="https://i.pinimg.com/736x/64/33/ef/6433ef22ce1325a1cb6190f77722998d.jpg"
              alt=""
              className="rounded-2xl h-full w-full"
            />
          </div>
          <div className="rounded-2xl w-full h-40 lg:h-58">
            <img
              src="https://i.pinimg.com/1200x/ec/8a/73/ec8a73ef6d05181ecb4ff4468529e76e.jpg"
              alt=""
              className="rounded-2xl h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
