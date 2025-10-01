"use client"

import React from "react";

const HeroSection = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-22">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          {/* left */}
          <div className="h-80 w-full md:h-[380px] rounded-sm lg:w-[50%]">
            <img
              src="https://i.pinimg.com/736x/ce/c7/ff/cec7ff2d0134d108d5e9ae1bf51e46f7.jpg"
              alt=""
              className="w-full h-full rounded-sm"
            />
          </div>
          {/* right */}
          <div className="lg:w-[50%]">
            {/*  */}
            <div>
              <h1 className="text-[#253D4E] font-bold text-2xl mb-3 lg:text-4xl">
                Welcome to SmartZone Mobile Store
              </h1>
              <p className="text-[#7E7E7E] font-medium text-sm">
                Discover the latest smartphones, tablets, and mobile accessories
                all in one place. From flagship devices to budget-friendly
                models, we bring you the best deals with
                <span className="text-[#3BB77E] font-semibold">
                  {" "}
                  guaranteed authenticity
                </span>
                .
              </p>
              <br />
              <p className="text-[#7E7E7E] font-medium text-sm">
                Shop online and get your favorite mobile delivered right to your
                doorstep. Stay connected with cutting-edge technology, premium
                quality, and
                <span className="text-[#3BB77E] font-semibold">
                  {" "}
                  unbeatable prices
                </span>
                . Your trusted mobile destination is here — because your next
                upgrade matters!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
