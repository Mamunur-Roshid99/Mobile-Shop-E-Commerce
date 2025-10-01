"use client";

import { useSelector } from "react-redux";
import HeroSection from "./HeroSection";

export default function ProductPageClient() {
  const product = useSelector((state) => state.product.selectedProduct);

  if (!product) return <p>No product selected!</p>;

  return (
    <div>
      <HeroSection product={product} />
    </div>
  );
}
