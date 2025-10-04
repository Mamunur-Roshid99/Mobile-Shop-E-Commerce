"use client";

import { useSelector } from "react-redux";
import HeroSection from "./HeroSection";
import ProductDescription from "./ProductDescription";

export default function ProductPageClient() {
  const product = useSelector((state) => state.product.selectedProduct);

  if (!product) return (
    <p className="text-center my-10 text-gray-500">No product selected!</p>
  );

  return (
    <div>
      <HeroSection product={product} />
      <ProductDescription product={product} />
    </div>
  );
}
