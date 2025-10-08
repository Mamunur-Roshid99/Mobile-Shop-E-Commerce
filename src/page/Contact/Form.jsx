import React from "react";

const Form = () => {
  return (
    <div className="pb-12">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-22 lg:flex lg:items-center lg:justify-between lg:gap-12">
        {/* left */}
        <div className="lg:w-[70%]">
          <h3 className="text-[#3BB77E] font-semibold mb-1">Contact form</h3>
          <h1 className="text-[#253D4E] font-bold text-2xl mb-2 lg:text-4xl">
            Contact Our Mobile Experts
          </h1>
          <p className="font-medium text-sm text-[#B6B6B6] mb-3">
            Have questions about smartphones, accessories, or your order? Fill
            out the form below and our team will reach out to you shortly.
          </p>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="focus:outline-none border border-[#ECECEC] text-sm text-[#838383] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="focus:outline-none border border-[#ECECEC] text-sm text-[#838383] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
            />
            <input
              type="number"
              placeholder="Your Number"
              className="focus:outline-none border border-[#ECECEC] text-sm text-[#838383] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="focus:outline-none border border-[#ECECEC] text-sm text-[#838383] font-medium rounded-sm px-3 py-2 placeholder:text-[#838383] focus:ring-1 focus:ring-[#3BB77E]"
            />
            <textarea
              name=""
              id=""
              className="focus:outline-none border border-[#ECECEC] text-sm text-[#838383] font-medium rounded-sm px-3 py-3 placeholder:text-[#838383] lg:col-span-2"
              rows={10}
            ></textarea>
            <button className="bg-[#3BB77E] text-white font-medium text-sm px-6 py-3 rounded-sm mt-2 cursor-pointer lg:w-44">
              Send message
            </button>
          </div>
        </div>
        {/* right */}
        <div className="hidden lg:block lg:w-[30%] rounded-lg">
          <img
            src="https://i.pinimg.com/736x/c8/58/a9/c858a90434ac5fc1fa2f12c8ad9d5591.jpg"
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
