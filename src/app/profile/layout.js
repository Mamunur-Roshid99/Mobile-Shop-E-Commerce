"use client";

import ProfileSidebar from "@/components/ProfileSidebar";
import Navbar from "@/layout/Navbar";
import NavLink from "@/layout/NavLink";
import TopNavbar from "@/layout/TopNavbar";

export default function ProfileLayout({ children }) {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <NavLink />
      <div className="pt-5 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 flex flex-col md:flex-row items-start gap-4 lg:gap-7">
          {/* Sidebar */}
          <ProfileSidebar />

          {/* Right Content */}
          <main className="flex-1 w-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
