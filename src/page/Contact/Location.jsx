"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import dynamic from "next/dynamic";

// Map component dynamic import
const Map = dynamic(() => import("./Map"), { ssr: false });

const Location = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState([48.8566, 2.3522]);

  const locations = {
    office: [23.685, 90.3563], // Chicago
    studio: [40.7128, -74.006], // New York
    shop: [34.0522, -118.2437], // Los Angeles
  };

  const openMap = (coords) => {
    setSelectedLocation(coords);
    setIsOpen(true);
  };
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
            <button
              onClick={() => openMap(locations.office)}
              className="bg-[#3BB77E] text-white font-medium flex items-center justify-center gap-2 text-sm px-6 py-2 rounded-sm mt-2"
            >
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
            <button
              onClick={() => openMap(locations.studio)}
              className="bg-[#3BB77E] text-white font-medium flex items-center justify-center gap-2 text-sm px-6 py-2 rounded-sm mt-2"
            >
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
            <button
              onClick={() => openMap(locations.shop)}
              className="bg-[#3BB77E] text-white font-medium flex items-center justify-center gap-2 text-sm px-6 py-2 rounded-sm mt-2"
            >
              <FaMapMarkerAlt />
              <p>View Map</p>
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-3xl p-4 relative">
            <div className="flex items-start justify-between gap-2">
              {/* Map Show */}
              <div className="h-[400px] w-full">
                <Map coordinates={selectedLocation} />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
