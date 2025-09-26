import React from 'react'
import Link from 'next/link';
import { TiHomeOutline } from "react-icons/ti";
import { FaAngleRight } from "react-icons/fa6";

const TopSection = () => {
  return (
    <div className="pt-5 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div
          style={{
            backgroundImage: "url('/images/bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-xl p-4 flex flex-col items-center justify-center gap-2 py-10"
        >
          <div>
            <h1 className="text-[#253D4E] font-bold text-xl lg:text-3xl">
              Blog & News
            </h1>
          </div>
          <div className="flex items-center gap-4 text-sm">
            {/* home */}
            <Link
              href="/"
              className="flex items-center gap-2 text-[#3BB77E] font-semibold"
            >
              <TiHomeOutline />
              <p>Home</p>
            </Link>
            <FaAngleRight className="text-[#7E7E7E] text-xs" />
            <div className="text-[#7E7E7E] font-semibold">Pages</div>
            <FaAngleRight className="text-[#7E7E7E] text-xs" />
            <Link href="/blog" className="text-[#7E7E7E] font-semibold">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection
