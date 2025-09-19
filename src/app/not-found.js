import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-8xl font-extrabold text-red-600 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-6">
        Oops! Looks like this page doesn’t exist.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
