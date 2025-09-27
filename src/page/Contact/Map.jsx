"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  return (
    <div className="pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 z-10">
        <div className="h-[350px] w-full">
          <MapContainer
            center={[48.8566, 2.3522]} // Paris
            zoom={4}
            scrollWheelZoom={true}
            className="h-full w-full rounded-lg shadow-md"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}