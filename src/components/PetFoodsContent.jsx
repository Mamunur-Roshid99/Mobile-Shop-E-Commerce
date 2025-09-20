"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const PetFoodsContent = () => {
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
        slidesPerView={3} // default mobile
        breakpoints={{
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 8 },
        }}
        className="relative h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="bg-[#F2FCE4] flex flex-col items-center justify-center rounded-sm border border-[#F4F6FA] pb-5 h-full text-center cursor-pointer">
            <div>
              <img src="/images/burger.png" alt="Dog Food" />
            </div>
            <h1 className="text-[#253D4E] font-bold text-sm">Dog Food</h1>
            <p className="text-[#7E7E7E] font-semibold text-sm">11 items</p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="bg-[#FFFCEB] flex flex-col items-center justify-center rounded-sm border border-[#F4F6FA] pb-5 text-center h-full">
            <div>
              <img src="/images/1.png" alt="Cat Food" />
            </div>
            <h1 className="text-[#253D4E] font-bold text-sm">Cat Food</h1>
            <p className="text-[#7E7E7E] font-semibold text-sm">8 items</p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="bg-[#FEEFEA] flex flex-col items-center justify-center rounded-sm border border-[#F4F6FA] pb-5 text-center h-full">
            <div>
              <img src="/images/2.png" alt="Bird Feed" />
            </div>
            <h1 className="text-[#253D4E] font-bold text-sm">Bird Feed</h1>
            <p className="text-[#7E7E7E] font-semibold text-sm">5 items</p>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="bg-[#FFF3EB] flex flex-col items-center justify-center rounded-sm border border-[#F4F6FA] pb-5 text-center h-full">
            <div>
              <img src="/images/3.png" alt="Fish Food" />
            </div>
            <h1 className="text-[#253D4E] font-bold text-sm">Fish Food</h1>
            <p className="text-[#7E7E7E] font-semibold text-sm">7 items</p>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="bg-[#FFF3FF] flex flex-col items-center justify-center rounded-sm border border-[#F4F6FA] pb-5 text-center h-full">
            <div>
              <img src="/images/4.png" alt="Rabbit Food" />
            </div>
            <h1 className="text-[#253D4E] font-bold text-sm">Rabbit Food</h1>
            <p className="text-[#7E7E7E] font-semibold text-sm">6 items</p>
          </div>
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide>
          <div className="bg-[#F2FCE4] flex flex-col items-center justify-center rounded-sm border border-[#F4F6FA] pb-5 text-center h-full">
            <div>
              <img src="/images/5.png" alt="Hamster Food" />
            </div>
            <h1 className="text-[#253D4E] font-bold text-sm">Hamster Food</h1>
            <p className="text-[#7E7E7E] font-semibold text-sm">5 items</p>
          </div>
        </SwiperSlide>

        {/* Slide 7 */}
        <SwiperSlide>
          <div className="bg-[#FEEFEA] flex flex-col items-center justify-center rounded-sm border border-[#F4F6FA] pb-5 text-center h-full">
            <div>
              <img src="/images/6.png" alt="Pet Treats" />
            </div>
            <h1 className="text-[#253D4E] font-bold text-sm">Pet Treats</h1>
            <p className="text-[#7E7E7E] font-semibold text-sm">10 items</p>
          </div>
        </SwiperSlide>

        {/* Slide 8 */}
        <SwiperSlide>
          <div className="bg-[#F2FCE4] flex flex-col items-center justify-center rounded-sm border border-[#F4F6FA] pb-5 text-center h-full">
            <div>
              <img src="/images/7.png" alt="Dog Snacks" />
            </div>
            <h1 className="text-[#253D4E] font-bold text-sm">Dog Snacks</h1>
            <p className="text-[#7E7E7E] font-semibold text-sm">8 items</p>
          </div>
        </SwiperSlide>

        {/* Slide 9 */}
        <SwiperSlide>
          <div className="bg-[#FEEFEA] flex flex-col items-center justify-center rounded-sm border border-[#F4F6FA] pb-5 text-center h-full">
            <div>
              <img src="/images/8.png" alt="Cat Treats" />
            </div>
            <h1 className="text-[#253D4E] font-bold text-sm">Cat Treats</h1>
            <p className="text-[#7E7E7E] font-semibold text-sm">7 items</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PetFoodsContent;