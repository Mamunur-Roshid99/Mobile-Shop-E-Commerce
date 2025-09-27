import Link from "next/link";
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
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 flex items-start">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-800 text-white p-6">
            <h2 className="text-xl font-bold mb-6">My Account</h2>
            <nav className="space-y-3">
              <Link
                href="/profile"
                className="block hover:bg-gray-700 p-2 rounded"
              >
                Profile
              </Link>
              <Link
                href="/profile/orders"
                className="block hover:bg-gray-700 p-2 rounded"
              >
                Orders
              </Link>
              <Link
                href="/profile/settings"
                className="block hover:bg-gray-700 p-2 rounded"
              >
                Settings
              </Link>
            </nav>
          </aside>

          {/* Right Content */}
          <main className="flex-1 p-6 bg-gray-100">{children}</main>
        </div>
      </div>
    </div>
  );
}
