import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

const TopNav = ({ pageName, pageLink }) => {
  return (
    <div className="border-b border-b-[#ECECEC]">
      <div className="flex items-center gap-4 text-sm py-4 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 lg:text-base">
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
        <Link href={pageLink} className="text-[#7E7E7E] font-semibold">
          {pageName}
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
