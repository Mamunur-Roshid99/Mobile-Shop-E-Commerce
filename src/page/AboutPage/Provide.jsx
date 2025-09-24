import React from "react";

const provideData = [
  {
    image: "/images/provide1.png",
    title: "Best Prices & Offers",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    image: "/images/provide2.png",
    title: "Best Prices & Offers",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    image: "/images/provide3.png",
    title: "Best Prices & Offers",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    image: "/images/provide4.png",
    title: "Best Prices & Offers",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    image: "/images/provide5.png",
    title: "Best Prices & Offers",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    image: "/images/provide6.png",
    title: "Best Prices & Offers",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
];

const companyData = [
  {
    point: "0+",
    name: "Glorious years",
  },
  {
    point: "0+",
    name: "Happy clients",
  },
  {
    point: "0+",
    name: "Projects complete",
  },
  {
    point: "0+",
    name: "Team advisor",
  },
  {
    point: "0+",
    name: "Products Sale",
  },
];

const Provide = () => {
  return (
    <div className="pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        {/* top */}
        <div className="max-w-7xl mx-auto px-2 md:px-2 lg:px-8">
          {/* title */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[#253D4E] font-bold text-2xl lg:text-3xl">
              What We Provide?
            </h1>
            <img src="/images/line.png" alt="" />
          </div>
          {/* grid layout */}
          <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {provideData.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-3 border border-[#ECECEC] rounded-lg p-5"
              >
                {/* img */}
                <div className="w-18">
                  <img src={item.image} alt={item.title} className="w-full" />
                </div>
                <h5 className="text-[#253D4E] font-bold text-lg">
                  {item.title}
                </h5>
                <p className="text-[#7E7E7E] font-medium text-sm text-center">
                  {item.desc}
                </p>
                <button className="text-[#3BB77E] font-medium text-sm cursor-pointer border-b-2 border-b-white duration-300 hover:border-b-2  hover:border-b-[#3BB77E]">
                  Read more
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* bottom */}
        <div
          style={{
            backgroundImage: "url('/images/Main.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-lg mt-8"
        >
          <div className="max-w-7xl mx-auto px-2 md:px-2 lg:px-8 grid grid-cols-2 gap-5 py-7 md:grid-cols-4 lg:grid-cols-5 lg:py-20">
            {companyData.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center">
                <h1 className="text-white font-bold text-4xl lg:text-5xl">{item.point}</h1>
                <p className="text-white font-medium text-sm lg:text-base">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
