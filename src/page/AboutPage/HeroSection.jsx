"use client"

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
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-22">
        <div className="flex flex-col gap-7 lg:grid lg:grid-cols-2">
          {/* left */}
          <div className="h-80 w-full md:h-[380px] lg:h-[500px]">
            <img src="/images/abouthero.jpg" alt="" className="w-full h-full" />
          </div>
          {/* right */}
          <div>
            {/*  */}
            <div>
              <h1 className="text-[#253D4E] font-bold text-2xl mb-3 lg:text-4xl">
                Welcome to Nest
              </h1>
              <p className="text-[#7E7E7E] font-medium text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate id est laborum.
              </p>
              <br />
              <p className="text-[#7E7E7E] font-medium text-sm">
                Ius ferri velit sanctus cu, sed at soleat accusata. Dictas
                prompta et Ut placerat legendos interpre.Donec vitae sapien ut
                libero venenatis faucibus. Nullam quis ante Etiam sit amet orci
                eget. Quis commodo odio aenean sed adipiscing. Turpis massa
                tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit
                amet. Commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate id est laborum.
              </p>
            </div>
            {/*  */}
            <div className="h-[300px] md:h-[300px] lg:h-[200px] mt-7">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                  nextEl: ".custom-swiper-next",
                  prevEl: ".custom-swiper-prev",
                }}
                pagination={{ el: ".custom-pagination", clickable: true }}
                spaceBetween={10}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                slidesPerView={1}
                breakpoints={{
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 3 },
                }}
                className="relative h-full"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="w-full h-full">
                    <img
                      src="/images/about-2.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="w-full h-full">
                    <img
                      src="/images/about-3.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                  <div className="w-full h-full">
                    <img
                      src="/images/about-4.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide>
                  <div className="w-full h-full">
                    <img
                      src="/images/about-3.png"
                      alt=""
                      className="w-full h-full object-cover"
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
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
