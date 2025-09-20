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
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 h-[500px] md:h-[350px] lg:h-[450px]">
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
          className="relative rounded-2xl h-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="bg-[#c5ead9] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-5 md:px-16 h-full">
              <div className="lg:w-[50%]">
                <h1 className="text-[#253D4E] font-bold text-3xl mb-3 lg:text-5xl">
                  Fresh Vegetables Big discount
                </h1>
                <p className="text-[#7E7E7E] font-medium text-sm mb-5 lg:text-base">
                  Save up to 50% off on your first order
                </p>
                <div className="bg-white flex items-center justify-between rounded-full">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="text-sm mx-4 w-full focus:outline-none placeholder:text-[#838383]"
                  />
                  <button className="bg-[#3BB77E] rounded-full text-white py-3 text-sm px-4">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="lg:w-[50%] lg:flex lg:items-center lg:justify-end">
                <img
                  src="/images/Hero.png"
                  alt="Hero"
                  className="w-[350px] md:w-[450px]"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="bg-[#ffd6d6] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-5 md:px-16 h-full">
              <div className="lg:w-[50%]">
                <h1 className="text-[#253D4E] font-bold text-3xl mb-3 lg:text-5xl">
                  Fresh Fruits Offer
                </h1>
                <p className="text-[#7E7E7E] font-medium text-sm mb-5 lg:text-base">
                  Get your favorite fruits with 30% discount
                </p>
                <button className="bg-[#F97316] rounded-full text-white py-3 text-sm px-5">
                  Shop Now
                </button>
              </div>
              <div className="lg:w-[50%] lg:flex lg:items-center lg:justify-end">
                <img
                  src="/images/Hero.png"
                  alt="Fruits"
                  className="w-[350px] md:w-[450px]"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="bg-[#d6e8ff] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-5 md:px-16 h-full">
              <div className="lg:w-[50%]">
                <h1 className="text-[#253D4E] font-bold text-3xl mb-3 lg:text-5xl">
                  Organic Grocery Products
                </h1>
                <p className="text-[#7E7E7E] font-medium text-sm mb-5 lg:text-base">
                  Enjoy fresh groceries at the best price
                </p>
                <button className="bg-[#3B82F6] rounded-full text-white py-3 text-sm px-5">
                  Explore Now
                </button>
              </div>
              <div className="lg:w-[50%] lg:flex lg:items-center lg:justify-end">
                <img
                  src="/images/Hero.png"
                  alt="Grocery"
                  className="w-[350px] md:w-[450px]"
                />
              </div>
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
      </div>
    </div>
  );
};

export default HeroSection;
