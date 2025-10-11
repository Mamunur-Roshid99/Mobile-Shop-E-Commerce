import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const isAdminRoute = req.nextUrl.pathname.startsWith("/dashboard");

  if (isAdminRoute) {
    if (!token) {
      return NextResponse.redirect(new URL("/dashboard/login", req.url));
    }

    try {
      jwt.verify(token, jwtSecret);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/dashboard/login", req.url));
    }
  }

  return NextResponse.next();
}