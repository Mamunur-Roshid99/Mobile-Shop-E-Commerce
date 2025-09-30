import Link from "next/link";
import React from "react";

const categories = [
  {
    name: "Samsung",
    img: "/images/samsung.png",
    slug: "samsung",
  },
  {
    name: "iPhone",
    img: "https://i.pinimg.com/736x/b3/e6/ae/b3e6aeaa47709e1e4d23a7b2776b9b12.jpg",
    slug: "iphone",
  },
  {
    name: "Vivo",
    img: "https://i.pinimg.com/736x/af/d5/9f/afd59f934bff361e9f510d2ae92eee3a.jpg",
    slug: "vivo",
  },
  {
    name: "Xiaomi",
    img: "https://i.pinimg.com/736x/54/48/31/54483104e8b038e77ced575abb634af9.jpg",
    slug: "xiaomi",
  },
  {
    name: "Realme",
    img: "https://i.pinimg.com/736x/cf/1d/ce/cf1dced7251cc204d6145ed72c38a8b9.jpg",
    slug: "realme",
  },
  {
    name: "Laptop",
    img: "https://i.pinimg.com/1200x/78/bf/a8/78bfa893270a0b531705b1c56f25674d.jpg",
    slug: "laptop",
  },
  {
    name: "Smart Watch",
    img: "https://i.pinimg.com/736x/ef/bb/17/efbb17fc0cfc2be91f2c913c66676a5f.jpg",
    slug: "smartwatch",
  },
  {
    name: "AirPods",
    img: "https://i.pinimg.com/736x/7f/79/eb/7f79eb40946e64987220158234c78df4.jpg",
    slug: "airpods",
  },
  {
    name: "Phone Case",
    img: "https://i.pinimg.com/1200x/e0/d7/7f/e0d77fd36e5b028212325d3773d27a32.jpg",
    slug: "phonecase",
  },
  {
    name: "Smart TV",
    img: "https://i.pinimg.com/1200x/57/80/ac/5780ac2b64c9f4177054455119124a8e.jpg",
    slug: "smarttv",
  },
];

const CategorySection = () => {
  return (
    <div className="pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        {/* top */}
        <div>
          <h1 className="text-[#253D4E] font-bold text-xl lg:text-3xl">
            Shop by Categories
          </h1>
        </div>
        {/* bottom */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 mt-6">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={`/category/${cat.slug}`}
              className="border border-[#ECECEC] rounded-lg p-4 text-center shadow hover:shadow transition"
            >
              <div className="w-full h-20 lg:h-28 mb-2 flex items-center justify-center">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-[#253D4E] lg:">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
