"use client";

import ProductFiltering from "@/components/ProductFiltering";
import { addToCart } from "@/store/cartSlice";
import { setSelectedProduct } from "@/store/productSlice";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

const links = [
  { label: "All" },
  { label: "samsung" },
  { label: "iPhone" },
  { label: "vivo" },
  { label: "xiaomi" },
  { label: "realme" },
  { label: "laptop" },
  { label: "smartwatch" },
  { label: "airpods" },
  { label: "phonecase" },
  { label: "smarttv" },
];

// Sample products (dummy)
const products = [
  {
    id: 1,
    title: "Samsung Galaxy S24 Ultra",
    image:
      "https://i.pinimg.com/736x/aa/ff/a3/aaffa3f6b3eccfd7d80f9f4b8823b5b4.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/83/73/41/8373410d50981e10b8c5e83d1fe3f285.jpg",
    thubimg2:
      "https://i.pinimg.com/1200x/35/9c/d1/359cd120e8f516cb50d30349c09303d9.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/04/32/4b/04324b404e3e68b71e91e3518836dcd5.jpg",
    thubimg4:
      "https://i.pinimg.com/1200x/a8/f1/f6/a8f1f6f9db849e8811d521c62ce744b8.jpg",
    description: "Features and Specifications of Samsung Galaxy S24 Ultra",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [
      { user: "jhon", comment: "Great product, loved it!" },
      { user: "dhon", comment: "Battery backup could be better." },
    ],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Samsung",
    discountPercent: "8%",
    badge: "Hot",
    category: "samsung",
  },
  {
    id: 2,
    title: "Samsung Galaxy A54",
    image:
      "https://i.pinimg.com/1200x/8c/49/c0/8c49c093e87967598c63c87bd7e39000.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/95/14/a8/9514a8a18f1b1718eaa16c339cb2d86b.jpg",
    thubimg2:
      "https://i.pinimg.com/1200x/3a/59/33/3a593365981a4c9c1fb6cba791272422.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/67/ec/22/67ec225a3d8b5a5e76f14a5640b72da3.jpg",
    thubimg4:
      "https://i.pinimg.com/736x/8b/0e/45/8b0e456f6c2f7e0de9fcb87ddf8d009d.jpg",
    description: "Features and Specifications of Samsung Galaxy A54",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Samsung",
    discountPercent: "8%",
    badge: "Hot",
    category: "samsung",
  },
  {
    id: 3,
    title: "iPhone 15 Pro",
    image:
      "https://i.pinimg.com/736x/8e/1c/37/8e1c3744a4f11b8a6d5d053c59e9a75c.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/b2/01/16/b201169858d006ec598e0a67651c9add.jpg",
    thubimg2:
      "https://i.pinimg.com/736x/92/c3/56/92c3569b3dbbf2db67bd144600d59ff7.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/5a/aa/86/5aaa863e7b659d95a8ca05f0d6a9b593.jpg",
    thubimg4:
      "https://i.pinimg.com/1200x/47/b8/41/47b84137ffbfd0b0bdc85c929c115437.jpg",
    description: "Features and Specifications of iPhone 15 Pro",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "",
    category: "iPhone",
  },
  {
    id: 4,
    title: "iPhone 14",
    image:
      "https://i.pinimg.com/736x/a0/76/34/a07634ff404e2b59f613f04509067f4c.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/da/96/69/da966934f8966eaac12665a0985d98da.jpg",
    thubimg2:
      "https://i.pinimg.com/736x/17/aa/d5/17aad593348ac5fbd3442a4d382f3010.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/28/75/fe/2875feb2edc07824d2437b828609e75d.jpg",
    thubimg4:
      "https://i.pinimg.com/736x/9e/92/c2/9e92c25266a4cab69fec831952347e90.jpg",
    description: "Features and Specifications of iPhone 14",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "New",
    category: "iPhone",
  },
  {
    id: 5,
    title: "Vivo X100 Pro",
    image:
      "https://i.pinimg.com/736x/6b/fc/95/6bfc95a7c6e34a375c072d2428a5d769.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/4f/7a/47/4f7a47647767fe899221924f70ce629b.jpg",
    thubimg2:
      "https://i.pinimg.com/736x/1f/69/d1/1f69d1b2717c5be010d9787e0b30b3c1.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/ba/84/b8/ba84b8520c2a9781fe0a28800a55f4e3.jpg",
    thubimg4:
      "https://i.pinimg.com/736x/ed/b9/a3/edb9a3b6e2c9fe8697774a014798ef50.jpg",
    description: "Features and Specifications of Vivo X100 Pro",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [
      { user: "jhon", comment: "Great product, loved it!" },
      { user: "dhon", comment: "Battery backup could be better." },
    ],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "",
    category: "vivo",
  },
  {
    id: 6,
    title: "Vivo V29",
    image:
      "https://i.pinimg.com/736x/4a/63/df/4a63df10317e3580656ce283b7210a0c.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/90/0d/f5/900df5fb5a2a1473c62cbb5ea20b93e0.jpg",
    thubimg2:
      "https://i.pinimg.com/736x/f0/38/a8/f038a8ee6f94f357a0cf52fd6a08f316.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/c9/a2/83/c9a283ab923084e4fbe208c600a890c9.jpg",
    thubimg4:
      "https://i.pinimg.com/736x/dc/0a/72/dc0a726a10a79201d8aa89bf327ba951.jpg",
    description: "Features and Specifications of Vivo V29",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "Hot",
    category: "vivo",
  },
  {
    id: 7,
    title: "Xiaomi 14 Pro",
    image:
      "https://i.pinimg.com/1200x/5d/d7/2a/5dd72a5695c77afdd551c2b12067322a.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/72/66/3e/72663e3503e1b4dc1cbb22e050e37881.jpg",
    thubimg2:
      "https://i.pinimg.com/736x/80/19/f3/8019f363354d74275ce78f2a15648991.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/9f/95/09/9f95096338e1c3a3ce56a4a30ea72636.jpg",
    thubimg4:
      "https://i.pinimg.com/736x/77/25/1f/77251f5e5a029e2dd9fec3598b32f9e3.jpg",
    description: "Features and Specifications of Xiaomi 14 Pro",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "",
    category: "xiaomi",
  },
  {
    id: 8,
    title: "Redmi Note 13",
    image:
      "https://i.pinimg.com/736x/ac/bb/28/acbb28dc5b8e8c6876873e0c485e25c4.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/2c/db/79/2cdb79bc0fc6bb010168b8af08b66e35.jpg",
    thubimg2:
      "https://i.pinimg.com/736x/1a/e7/f9/1ae7f9349a7b0da16fcc3a0f3c0d511a.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/6d/a9/56/6da956d5e3c06330f12ba4751ef0ff4b.jpg",
    thubimg4:
      "https://i.pinimg.com/736x/b4/b9/94/b4b99446669d255dace5476d31ab9142.jpg",
    description: "Features and Specifications of Redmi Note 13",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "",
    category: "xiaomi",
  },
  {
    id: 9,
    title: "Realme GT 5",
    image:
      "https://i.pinimg.com/1200x/5a/5e/8b/5a5e8b91bd4e8d329918d6275fc7aaf5.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/c8/b8/69/c8b869743295d0d9b7c0d2479e1e50d4.jpg",
    thubimg2:
      "https://i.pinimg.com/1200x/34/df/cd/34dfcd421daf3e04f7c8ce976cb894e0.jpg",
    thubimg3:
      "https://i.pinimg.com/1200x/9e/64/27/9e6427e6eb00b340ee591366405dd7cb.jpg",
    thubimg4:
      "https://i.pinimg.com/1200x/3e/63/03/3e630363f28b37c54ac73e0e0227d46b.jpg",
    description: "Features and Specifications of Realme GT 5",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "Hot",
    category: "realme",
  },
  {
    id: 10,
    title: "Realme Narzo 60x",
    image:
      "https://i.pinimg.com/1200x/98/34/c1/9834c1d956e1cd61c18ade02d73863ea.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/86/6a/cb/866acbb28d82cb7464c92b61ef1d0632.jpg",
    thubimg2:
      "https://i.pinimg.com/1200x/0e/07/fc/0e07fc018c535f3e5ed482557277b6ad.jpg",
    thubimg3:
      "https://i.pinimg.com/1200x/aa/77/99/aa7799ddd49301750df6f7be1c909d3b.jpg",
    thubimg4:
      "https://i.pinimg.com/1200x/0e/07/fc/0e07fc018c535f3e5ed482557277b6ad.jpg",
    description: "Features and Specifications of Realme Narzo 60x",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "",
    category: "realme",
  },
  {
    id: 11,
    title: "MacBook Pro 16",
    image:
      "https://i.pinimg.com/1200x/c5/95/c9/c595c9dc092cb7fbfecedde02a6952ae.jpg",
    thubimg1:
      "https://i.pinimg.com/1200x/ec/40/d0/ec40d09d164005dbc7f7e35db17bb121.jpg",
    thubimg2:
      "https://i.pinimg.com/1200x/ee/b5/27/eeb5276ef5a14928bcdf0e77c8584416.jpg",
    thubimg3:
      "https://i.pinimg.com/1200x/b7/61/6c/b7616cfc0a3cce9d6e38bbe490dcae8b.jpg",
    thubimg4:
      "https://i.pinimg.com/1200x/20/0a/43/200a4346c468f170acb78ba02910e39d.jpg",
    description: "Features and Specifications of MacBook Pro 16",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "Hot",
    category: "laptop",
  },
  {
    id: 12,
    title: "Dell XPS 13",
    image:
      "https://i.pinimg.com/1200x/ff/b4/08/ffb408f8f331a635275e1fa35988c811.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/6e/09/24/6e0924f0d68e03a299c479738410bbce.jpg",
    thubimg2:
      "https://i.pinimg.com/736x/79/f7/4e/79f74ecc45d5d604777f86d6072a6baf.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/51/b0/b0/51b0b0a55a72f82d08bf0ea10755f56f.jpg",
    thubimg4:
      "https://i.pinimg.com/1200x/19/e2/5e/19e25e3dc9ef7af55f9175bc75c6507b.jpg",
    description: "Features and Specifications of Dell XPS 13",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "",
    category: "laptop",
  },
  {
    id: 13,
    title: "Apple Watch Series 9",
    image:
      "https://i.pinimg.com/736x/11/86/54/11865435c73c053c79cd8ad90b385da8.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/b3/92/52/b39252fc9cdb1e35135be9bc494daefb.jpg",
    thubimg2:
      "https://i.pinimg.com/736x/73/79/36/7379362564b8d0d4803b34d6eff80dbf.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/29/12/3c/29123cf1588fae99b238093928fccc42.jpg",
    thubimg4:
      "https://i.pinimg.com/1200x/2d/1c/d5/2d1cd543c210e5cedd37a2c31d77ec6a.jpg",
    description: "Features and Specifications of Apple Watch Series 9",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "",
    category: "smartwatch",
  },
  {
    id: 14,
    title: "Samsung Galaxy Watch 6",
    image:
      "https://i.pinimg.com/736x/4f/5b/06/4f5b069edf4944acdf0f7658bbc94c69.jpg",
    thubimg1:
      "https://i.pinimg.com/1200x/ee/32/b3/ee32b31b5f7c3b8df3f48fd6b9ed6bcd.jpg",
    thubimg2:
      "https://i.pinimg.com/1200x/fc/ef/09/fcef09b91a4502f7279c2a7e5a142b3a.jpg",
    thubimg3:
      "https://i.pinimg.com/1200x/36/f6/c8/36f6c8ad4130bb94824fbbf45f1d26d2.jpg",
    thubimg4:
      "https://i.pinimg.com/1200x/b6/5f/9b/b65f9baa9baa069770c16d31de33f40c.jpg",
    description: "Features and Specifications of Samsung Galaxy Watch 6",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "New",
    category: "smartwatch",
  },
  {
    id: 15,
    title: "AirPods Pro 2",
    image:
      "https://i.pinimg.com/736x/7f/79/eb/7f79eb40946e64987220158234c78df4.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/7f/79/eb/7f79eb40946e64987220158234c78df4.jpg",
    thubimg2:
      "https://i.pinimg.com/736x/7f/79/eb/7f79eb40946e64987220158234c78df4.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/7f/79/eb/7f79eb40946e64987220158234c78df4.jpg",
    thubimg4:
      "https://i.pinimg.com/736x/7f/79/eb/7f79eb40946e64987220158234c78df4.jpg",
    description: "Features and Specifications of AirPods Pro 2",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "",
    category: "airpods",
  },
  {
    id: 16,
    title: "AirPods 3rd Gen",
    image:
      "https://i.pinimg.com/1200x/a4/b7/49/a4b749ae448794555252d2ac9c70716c.jpg",
    thubimg1:
      "https://i.pinimg.com/1200x/a4/b7/49/a4b749ae448794555252d2ac9c70716c.jpg",
    thubimg2:
      "https://i.pinimg.com/1200x/a4/b7/49/a4b749ae448794555252d2ac9c70716c.jpg",
    thubimg3:
      "https://i.pinimg.com/1200x/a4/b7/49/a4b749ae448794555252d2ac9c70716c.jpg",
    thubimg4:
      "https://i.pinimg.com/1200x/a4/b7/49/a4b749ae448794555252d2ac9c70716c.jpg",
    description: "Features and Specifications of AirPods 3rd Gen",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "",
    category: "airpods",
  },
  {
    id: 17,
    title: "iPhone 15 Silicone Case",
    image:
      "https://i.pinimg.com/1200x/da/35/92/da359288cf4d670c2ef7a231d373ad5c.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/7f/ce/7b/7fce7b17c988b52d9f0e1a0bd150617c.jpg",
    thubimg2:
      "https://i.pinimg.com/1200x/da/6d/4c/da6d4ca72ec0d67108f09babdae2692d.jpg",
    thubimg3:
      "https://i.pinimg.com/1200x/0e/82/47/0e82473462f8dc9ccfe747907734fc1a.jpg",
    thubimg4:
      "https://i.pinimg.com/736x/9f/3f/14/9f3f143995769109408d136ca93fd2e1.jpg",
    description: "Features and Specifications of iPhone 15 Silicone Case",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 4,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "",
    category: "phonecase",
  },
  {
    id: 18,
    title: "Samsung S24 Ultra Protective Case",
    image:
      "https://i.pinimg.com/1200x/1a/c9/02/1ac9020077de789859ea976c1260d9e9.jpg",
    thubimg1:
      "https://i.pinimg.com/736x/bd/7c/32/bd7c321df58adbac28dc53908c87f876.jpg",
    thubimg2:
      "https://i.pinimg.com/1200x/28/31/8c/28318c0a33ca02e011fe70f46c7d5600.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/1b/0a/95/1b0a95c8e71994813bd66b88b2a8d95b.jpg",
    thubimg4:
      "https://i.pinimg.com/1200x/99/1d/9a/991d9a9ef2a26378a95f2b01aba81fab.jpg",
    description:
      "Features and Specifications of Samsung S24 Ultra Protective Case",
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 2,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "",
    category: "phonecase",
  },
  {
    id: 19,
    title: 'Samsung Neo QLED 55"',
    image:
      "https://i.pinimg.com/736x/cd/c8/44/cdc84400e429fd160673ec83bfe9aa76.jpg",
    thubimg1:
      "https://i.pinimg.com/1200x/9b/58/a8/9b58a8e30d7169fcbc8b6fe250ad4441.jpg",
    thubimg2:
      "https://i.pinimg.com/1200x/c5/06/a5/c506a5a0f36af6852c0b00ade4fbf60b.jpg",
    thubimg3:
      "https://i.pinimg.com/1200x/87/5c/24/875c240c867fcbb35e60255b88c415fa.jpg",
    thubimg4:
      "https://i.pinimg.com/1200x/7e/b4/e2/7eb4e2213a8dbb3983c0778016b4389c.jpg",
    description: 'Features and Specifications of Samsung Neo QLED 55"',
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 3,
    sold: 5,
    price: "$23.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "New",
    category: "smarttv",
  },
  {
    id: 20,
    title: 'LG OLED C3 65"',
    image:
      "https://i.pinimg.com/1200x/ab/48/0f/ab480f1640cda7ed27301524141b6635.jpg",
    thubimg1:
      "https://i.pinimg.com/1200x/16/53/5c/16535ca0c87f5228228bf9983831ff98.jpg",
    thubimg2:
      "https://i.pinimg.com/736x/3e/d7/94/3ed79405e27ade668322daece8ab006e.jpg",
    thubimg3:
      "https://i.pinimg.com/736x/06/a6/fc/06a6fc933e26fd67d67e758c05904051.jpg",
    thubimg4:
      "https://i.pinimg.com/1200x/42/7e/59/427e59ef938cb7b0aab639bbadc2fab0.jpg",
    description: 'Features and Specifications of LG OLED C3 65"',
    features: ["Easy to grip", "20 min runtime", "Cordless use"],
    specifications: [
      "Ergonomic grip",
      "Self-sharpening blades",
      "Charging time: 8 hours",
    ],
    reviews: [],
    rating: 1,
    sold: 5,
    price: "$21.00",
    discountPrice: "$24.00",
    brand: "Hambger Hel",
    discountPercent: "8%",
    badge: "",
    category: "smarttv",
  },
];

const ProductSec = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  // Filter products
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      let tempProducts = products;

      // Category filter (exclude badge values)
      if (
        selectedCategory !== "All" &&
        selectedCategory !== "Hot" &&
        selectedCategory !== "New"
      ) {
        tempProducts = tempProducts.filter(
          (p) => p.category === selectedCategory
        );
      }

      // Badge filter
      if (selectedCategory === "Hot") {
        tempProducts = tempProducts.filter((p) => p.badge === "Hot");
      } else if (selectedCategory === "New") {
        tempProducts = tempProducts.filter((p) => p.badge === "New");
      }

      // Price filter
      tempProducts = tempProducts.filter(
        (p) => parseFloat(p.discountPrice.replace("$", "")) <= maxPrice
      );

      setFilteredProducts(tempProducts);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, maxPrice]);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 lg:flex lg:items-start lg:justify-between lg:gap-10">
        {/* Left: Products */}
        <div className="lg:w-[70%]">
          {/* Top: Mobile dropdown */}
          <div className="flex items-center justify-between relative">
            <h1 className="text-[#253D4E] font-bold text-xl lg:text-3xl">
              All Products
            </h1>
            <div className="relative inline-block text-left bg-[#3BB77E] text-white px-4 py-2 rounded-sm gap-5 z-10 lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex justify-between w-32 text focus:outline-none font-semibold text-sm"
              >
                {selectedCategory}
                <svg
                  className={`w-5 h-5 ml-0 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.354a.75.75 0 111.14.976l-4 4.7a.75.75 0 01-1.14 0l-4-4.7a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute left-0 w-40 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg">
                  {links.map((category) => (
                    <div
                      key={category.label}
                      onClick={() => {
                        setSelectedCategory(category.label);
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 text-sm text-black cursor-pointer hover:bg-gray-100"
                    >
                      {category.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-8">
            {loading
              ? Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-200 animate-pulse h-44 rounded-md"
                  ></div>
                ))
              : filteredProducts.map((product, index) => (
                  <div
                    key={`${product.id}-${index}`}
                    onClick={() => {
                      dispatch(setSelectedProduct(product));
                      router.push(`/product/${product.id}`);
                    }}
                    className="bg-white rounded-xl p-2 border border-gray-200 flex flex-col gap-1 cursor-pointer hover:shadow-lg duration-300 lg:p-4 relative"
                  >
                    {/* Image */}
                    <div className="w-full h-40 lg:h-52 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full object-contain w-[65%] md:w-[60%] lg:w-[70%]"
                      />
                    </div>

                    {/* Details */}
                    <div>
                      <h1 className="text-[#253D4E] font-bold text-sm mb-3 lg:text-lg lg:leading-5">
                        {product.title}
                      </h1>

                      {/* Rating & sold */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`h-3 w-3 ${
                                i < product.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-xs text-[#B6B6B6]">
                          {product.sold}
                        </div>
                      </div>

                      {/* Provider */}
                      <div className="flex items-center gap-1 text-[#B6B6B6] text-xs mb-3 font-semibold lg:text-sm">
                        By <p className="text-[#3BB77E]">{product.provider}</p>
                      </div>

                      {/* Price & Add */}
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-end gap-3">
                          <span className="text-[#3BB77E] font-bold text-lg border-b-2">
                            {product.discountPrice}
                          </span>
                          <del className="text-[#ADADAD] font-medium text-sm border-b-2 border-b-white">
                            {product.price}
                          </del>
                        </div>
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            dispatch(addToCart(product));
                            toast.success("Product added to cart!");
                          }}
                          className="flex gap-2 bg-[#DEF9EC] items-center justify-center rounded-sm py-2 text-[#3BB77E] font-bold cursor-pointer lg:px-3 hover:bg-[#3BB77E] hover:text-white duration-500"
                        >
                          <IoCartOutline />
                          <p>Add</p>
                        </div>
                      </div>
                    </div>

                    {/* Badges */}
                    {product.discountPercent && (
                      <span className="absolute top-0 left-0 bg-[#3BB77E] text-white text-xs px-4 py-1 rounded-br-xl rounded-tl-xl">
                        {product.discountPercent}
                      </span>
                    )}
                    {product.badge && (
                      <span
                        className={`absolute top-0 right-0 ${
                          product.badge === "Hot"
                            ? "bg-[#DD3333]"
                            : "bg-[#67BCEE]"
                        } text-white text-xs px-4 py-1 rounded-bl-xl rounded-tr-xl`}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>
                ))}
          </div>
        </div>

        {/* Right: Filters */}
        <ProductFiltering
          links={links}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          filteredProducts={filteredProducts}
        />
      </div>
    </div>
  );
};

export default ProductSec;
