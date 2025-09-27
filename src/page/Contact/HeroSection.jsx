import React from 'react'

const HeroSection = () => {
  return (
    <div className="pt-5 pb-12">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-22">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          {/* left */}
          <div className='lg:w-[35%]'>
            <h3 className="text-[#3BB77E] font-semibold mb-1">How can help you ?</h3>
            <h1 className="text-[#253D4E] font-bold text-2xl mb-3 lg:text-4xl">
              Let us know how we can help you
            </h1>
            <p className="text-[#7E7E7E] font-medium text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <br />
            <p className="text-[#7E7E7E] font-medium text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          {/* right */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 lg:w-[60%]'>
            {/* 1 */}
            <div>
              <h1 className="text-[#253D4E] font-bold text-xl mb-1 hover:text-[#3BB77E] duration-300">
                01. Visit Feedback
              </h1>
              <p className="text-[#7E7E7E] font-medium text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            {/* 2 */}
            <div>
              <h1 className="text-[#253D4E] font-bold text-xl mb-1 hover:text-[#3BB77E] duration-300">
                02. Employer Services
              </h1>
              <p className="text-[#7E7E7E] font-medium text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            {/* 3 */}
            <div>
              <h1 className="text-[#253D4E] font-bold text-xl mb-1 hover:text-[#3BB77E] duration-300">
                03. Billing Inquiries
              </h1>
              <p className="text-[#7E7E7E] font-medium text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            {/* 4 */}
            <div>
              <h1 className="text-[#253D4E] font-bold text-xl mb-1 hover:text-[#3BB77E] duration-300">
                04.General Inquiries
              </h1>
              <p className="text-[#7E7E7E] font-medium text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection
