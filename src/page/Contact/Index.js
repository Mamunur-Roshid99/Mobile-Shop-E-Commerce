"use client";

import React from "react";
import HeroSection from "./HeroSection";
import Location from "./Location";
import Form from "./Form";
import dynamic from "next/dynamic";

// শুধু dynamic import রাখো
const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function Index() {
  return (
    <div>
      <HeroSection />
      <Map />
      <Location />
      <Form />
    </div>
  );
}