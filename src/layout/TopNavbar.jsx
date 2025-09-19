import React from 'react'

const TopNavbar = () => {
  return (
    <div className="border-b border-b-[#ECECEC]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 hidden lg:flex items-center justify-between py-3 ">
        {/* left */}
        <div>
          <p className="text-[#7E7E7E] font-medium text-sm">
            100% Secure delivery without contacting the courier
          </p>
        </div>
        {/* right */}
        <div>
          <p className="text-[#7E7E7E] font-medium text-sm">
            Need help? Call Us:{" "}
            <span className="text-[#3BB77E]">+ 1800 900</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar
