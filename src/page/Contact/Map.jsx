"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ coordinates }) {
  return (
    <MapContainer
      center={coordinates}
      zoom={10}
      scrollWheelZoom={true}
      className="h-full w-full rounded-lg shadow-md"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={coordinates}>
        <Popup>Selected Location</Popup>
      </Marker>
    </MapContainer>
  );
}
