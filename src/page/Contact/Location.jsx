import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Location = () => {
  return (
    <div className="pb-12">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-22">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {/* 1 */}
          <div>
            <h1 className="text-[#3BB77E] font-bold text-2xl mb-1">Office</h1>
            <p className="font-medium text-[#7E7E7E] text-sm">
              205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
            </p>
            <p className="font-medium text-[#7E7E7E] text-sm">
              Phone: (123) 456-7890
            </p>
            <p className="font-medium text-[#7E7E7E] text-sm">
              Email: contact@Evara.com
            </p>
            <button className="bg-[#3BB77E] text-white font-medium flex items-center justify-center gap-2 text-sm px-6 py-2 rounded-sm mt-2">
              <FaMapMarkerAlt />
              <p>View Map</p>
            </button>
          </div>
          {/* 2 */}
          <div>
            <h1 className="text-[#3BB77E] font-bold text-2xl mb-1">Studio</h1>
            <p className="font-medium text-[#7E7E7E] text-sm">
              205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
            </p>
            <p className="font-medium text-[#7E7E7E] text-sm">
              Phone: (123) 456-7890
            </p>
            <p className="font-medium text-[#7E7E7E] text-sm">
              Email: contact@Evara.com
            </p>
            <button className="bg-[#3BB77E] text-white font-medium flex items-center justify-center gap-2 text-sm px-6 py-2 rounded-sm mt-2">
              <FaMapMarkerAlt />
              <p>View Map</p>
            </button>
          </div>
          {/* 3 */}
          <div>
            <h1 className="text-[#3BB77E] font-bold text-2xl mb-1">Shop</h1>
            <p className="font-medium text-[#7E7E7E] text-sm">
              205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
            </p>
            <p className="font-medium text-[#7E7E7E] text-sm">
              Phone: (123) 456-7890
            </p>
            <p className="font-medium text-[#7E7E7E] text-sm">
              Email: contact@Evara.com
            </p>
            <button className="bg-[#3BB77E] text-white font-medium flex items-center justify-center gap-2 text-sm px-6 py-2 rounded-sm mt-2">
              <FaMapMarkerAlt />
              <p>View Map</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
