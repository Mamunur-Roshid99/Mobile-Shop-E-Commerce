import Navbar from "@/layout/Navbar";
import NavLink from "@/layout/NavLink";
import TopNavbar from "@/layout/TopNavbar";
import Index from "@/page/SingleCategory/Index";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import React from "react";

export default function page({ params }) {
  const { slug } = params;
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <NavLink />
      <PageBreadcrumb pageName={slug} pageLink={`/category/${slug}`} />
      <Index slug={slug} />
    </div>
  );
}
