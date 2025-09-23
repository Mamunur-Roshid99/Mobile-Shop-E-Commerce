import React from "react";
import { FaPhone } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        {/* top */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between border-b border-b-[#BCE3C9] pb-5">
          {/* info */}
          <div className="lg:w-72">
            <div className="w-40 mb-4">
              <img src="/images/Nest.jpg" alt="" className="w-full" />
            </div>
            <p className="text-[#253D4E] font-bold mb-4">
              Awesome grocery store website template
            </p>
            <div className="flex items-start gap-2 font-medium text-[#253D4E] text-sm mb-2">
              <span>Address:</span>
              <p className="text-[#3BB77E]">
                5171 W Campbell Ave undefinedKent, Utah 53127 United States
              </p>
            </div>
            <div className="flex items-start gap-2 font-medium text-[#253D4E] text-sm mb-2">
              <span>Call Us:</span>
              <p className="text-[#3BB77E]">(+91)-540-025-124553</p>
            </div>
            <div className="flex items-start gap-2 font-medium text-[#253D4E] text-sm mb-2">
              <span>Email:</span>
              <p className="text-[#3BB77E]">sale@Nest.com</p>
            </div>
            <div className="flex items-start gap-2 font-medium text-[#253D4E] text-sm mb-2">
              <span>Hours:</span>
              <p className="text-[#3BB77E]">10:00 - 18:00, Mon - Sat</p>
            </div>
          </div>
          {/* company */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[#253D4E] font-bold text-xl">Company</h1>
            <ul className="flex flex-col gap-2 text-[#253D4E] font-medium text-sm">
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Support Center</li>
              <li>Careers</li>
            </ul>
          </div>
          {/* Account */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[#253D4E] font-bold text-xl">Account</h1>
            <ul className="flex flex-col gap-2 text-[#253D4E] font-medium text-sm">
              <li>Sign In</li>
              <li>View Cart</li>
              <li>My Wishlist</li>
              <li>Track My Order</li>
              <li>Help Ticket</li>
              <li>Shipping Details</li>
              <li>Compare products</li>
            </ul>
          </div>
          {/* Corporate */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[#253D4E] font-bold text-xl">Corporate</h1>
            <ul className="flex flex-col gap-2 text-[#253D4E] font-medium text-sm">
              <li>Become a Vendor</li>
              <li>Affiliate Program</li>
              <li>Farm Business</li>
              <li>Farm Careers</li>
              <li>Our Suppliers</li>
              <li>Accessibility</li>
              <li>Promotions</li>
            </ul>
          </div>
          {/* Popular */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[#253D4E] font-bold text-xl">Popular</h1>
            <ul className="flex flex-col gap-2 text-[#253D4E] font-medium text-sm">
              <li>Milk & Flavoured Milk</li>
              <li>Butter and Margarine</li>
              <li>Eggs Substitutes</li>
              <li>Marmalades</li>
              <li>Sour Cream and Dips</li>
              <li>Tea & Kombucha</li>
              <li>Cheese</li>
            </ul>
          </div>
          {/* install app */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[#253D4E] font-bold text-xl">Install App</h1>
            <div className="flex flex-col gap-3 mb-3">
              <p className="text-[#7E7E7E] text-sm font-medium lg:text-xs">
                From App Store or Google Play
              </p>
              <div className="flex items-center gap-4">
                <img src="/images/play.png" alt="" className="w-22 lg:w-20" />
                <img src="/images/apple.png" alt="" className="w-22 lg:w-20" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[#7E7E7E] text-sm font-medium lg:text-xs">
                Secured Payment Gateways
              </p>
              <img src="/images/payment.png" alt="" className="w-32" />
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="pt-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="text-[#7E7E7E] font-medium text-sm lg:text-base lg:w-96">
            © 2023, Nest – WordPress Ecommerce Template. All rights reserved
          </div>
          {/* contact */}
          <div className="flex items-center gap-2">
            <FaPhone className="text-[#585858] text-3xl" />
            <div className="flex flex-col">
              <p className="text-[#3BB77E] font-semibold text-2xl">
                1900 - 888
              </p>
              <span className="text-[#7E7E7E] text-xs">
                24/7 Support Center
              </span>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <h1 className="text-[#253D4E] font-bold">Follow Us</h1>
              <div className="flex items-center gap-5 lg:gap-2">
                <div className="bg-[#3BB77E] text-white size-8 flex items-center justify-center rounded-full text-sm duration-500 hover:bg-white hover:border hover:border-gray-300 hover:text-[#3BB77E] cursor-pointer">
                  <GrFacebookOption />
                </div>
                <div className="bg-[#3BB77E] text-white size-8 flex items-center justify-center rounded-full text-sm duration-500 hover:bg-white hover:border hover:border-gray-300 hover:text-[#3BB77E] cursor-pointer">
                  <FaInstagram />
                </div>
                <div className="bg-[#3BB77E] text-white size-8 flex items-center justify-center rounded-full text-sm duration-500 hover:bg-white hover:border hover:border-gray-300 hover:text-[#3BB77E] cursor-pointer">
                  <FaLinkedin />
                </div>
                <div className="bg-[#3BB77E] text-white size-8 flex items-center justify-center rounded-full text-sm duration-500 hover:bg-white hover:border hover:border-gray-300 hover:text-[#3BB77E] cursor-pointer">
                  <BsTwitterX />
                </div>
                <div className="bg-[#3BB77E] text-white size-8 flex items-center justify-center rounded-full text-sm duration-500 hover:bg-white hover:border hover:border-gray-300 hover:text-[#3BB77E] cursor-pointer">
                  <FaPinterest />
                </div>
              </div>
            </div>
            <div className="text-[#7E7E7E] font-medium text-sm">
              Up to 15% discount on your first subscribe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
