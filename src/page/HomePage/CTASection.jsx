import React from 'react'

const CTASection = () => {
  return (
    <div className="pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div
          style={{
            backgroundImage: "url('/images/bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-xl p-4 flex flex-col gap-8 md:flex-row md:items-center md:justify-between lg:p-8"
        >
          {/* left */}
          <div className='md:w-[50%] lg:w-[45%] order-2 md:order-1'>
            <h1 className="text-[#253D4E] font-bold text-2xl mb-2 lg:text-4xl">
              Stay home & get your daily needs from our shop
            </h1>
            <p className="text-[#7E7E7E] font-medium text-sm">
              Start Your Daily Shopping with{" "}
              <span className="text-[#3BB77E]">Nest Mart</span>
            </p>
            <div className="bg-white flex items-center justify-between rounded-full mt-5 lg:w-80">
              <input
                type="email"
                placeholder="Your email address"
                className="text-sm mx-4 w-full focus:outline-none placeholder:text-[#838383]"
              />
              <button className="bg-[#3BB77E] rounded-full text-white py-4 text-sm px-4">
                Subscribe
              </button>
            </div>
          </div>
          {/* rigth */}
          <div className='md:w-[50%] lg:w-[45%] order-1 md:order-2'>
            <img src="/images/cta.png" alt="" className='w-full' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTASection
