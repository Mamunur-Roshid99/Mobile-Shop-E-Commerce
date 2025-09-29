// app/product/[id]/ProductPageClient.jsx
"use client"; // ✅ Client Component

import { useSelector } from "react-redux";
import TopNav from "./TopNav";

export default function ProductPageClient() {
  const product = useSelector((state) => state.product.selectedProduct);

  if (!product) return <p>No product selected!</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 mt-4"
      />
      <p className="text-green-600 font-bold mt-2">{product.discountPrice}</p>
      <p className="line-through text-gray-400">{product.price}</p>
      <p className="mt-2">{product.category}</p>
    </div>
  );
}
