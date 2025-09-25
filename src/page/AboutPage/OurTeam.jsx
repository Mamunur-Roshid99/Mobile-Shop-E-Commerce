"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

const members = [
  {
    image: "/images/member.png",
    name: "H. Merinda",
    position: "CEO & Co-Founder",
    fblink: "facebook",
    twitter: "Twitter",
    insta: "Instagram",
    youtube: "Youtube",
  },
  {
    image: "/images/member.png",
    name: "Dilan Specter",
    position: "Head Engineer",
    fblink: "facebook",
    twitter: "Twitter",
    insta: "Instagram",
    youtube: "Youtube",
  },
  {
    image: "/images/member.png",
    name: "H. Merinda",
    position: "CEO & Co-Founder",
    fblink: "facebook",
    twitter: "Twitter",
    insta: "Instagram",
    youtube: "Youtube",
  },
  {
    image: "/images/member.png",
    name: "H. Merinda",
    position: "CEO & Co-Founder",
    fblink: "facebook",
    twitter: "Twitter",
    insta: "Instagram",
    youtube: "Youtube",
  },
];

const OurTeam = () => {
  return (
    <div className="pb-12">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-22">
        {/* title */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#253D4E] font-bold text-2xl lg:text-3xl">
            Our Team
          </h1>
          <img src="/images/line.png" alt="" />
        </div>
        {/*  */}
        <div className="mt-7 flex flex-col lg:flex-row gap-7 lg:items-start lg:justify-between">
          {/* left */}
          <div className="lg:w-[40%]">
            <h3 className="text-[#3BB77E] font-semibold text-sm mb-1">
              Our Team
            </h3>
            <h1 className="text-[#253D4E] font-bold text-2xl mb-3 lg:text-5xl">
              Meet Our Expert Team
            </h1>
            <p className="text-[#7E7E7E] font-medium text-sm lg:text-base">
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus.
            </p>
            <br />
            <p className="text-[#7E7E7E] font-medium text-sm lg:text-base">
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus.
            </p>
          </div>
          {/* right */}
          <div className="lg:w-[60%]">
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
                1024: { slidesPerView: 2 },
              }}
              className="relative h-full"
            >
              {/* slide */}
              {members.map((member, idx) => (
                <SwiperSlide
                  key={idx}
                  className="rounded-lg relative h-[400px]"
                >
                  <div className="w-full h-full relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-lg"
                    />

                    {/* Overlay content */}
                    <div className="bg-white shadow-lg rounded-lg absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] p-3 text-center">
                      <h3 className="text-[#253D4E] font-bold text-lg md:text-base">
                        {member.name}
                      </h3>
                      <p className="text-[#7E7E7E] text-sm lg:text-xs">
                        {member.position}
                      </p>
                      <div className="flex items-center justify-center gap-3 mt-2 text-[#3BB77E]">
                        <a href="#">
                          <FaFacebookF />
                        </a>
                        <a href="#">
                          <FaInstagram />
                        </a>
                        <a href="#">
                          <IoLogoTwitter />
                        </a>
                        <a href="#">
                          <FaYoutube />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

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
  );
};

export default OurTeam;
