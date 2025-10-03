import React from 'react'

const ProDescription = ({ product }) => {
  return (
    <div>
      <div className="text-[#253D4E] font-bold border-b border-b-[#ECECEC] pb-2 text-xl lg:text-2xl">
        Description
      </div>
      <p className="text-[#253D4E] font-bold my-3 lg:text-xl">
        {product.description}
      </p>

      {/* Features */}
      <h3 className="font-bold text-[#253D4E] mb-2 lg:text-lg">
        Key Features:
      </h3>
      <ul className="list-disc list-inside text-[#253d4ee8] mb-6 space-y-1 font-medium text-sm lg:text-base">
        {product.features?.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      {/* Specifications */}
      <h3 className="font-bold text-[#253D4E] mb-2 lg:text-lg">
        Specifications:
      </h3>
      <ul className="list-disc list-inside text-[#253d4ee8] space-y-1 font-medium text-sm lg:text-base">
        {product.specifications?.map((spec, idx) => (
          <li key={idx}>{spec}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProDescription
