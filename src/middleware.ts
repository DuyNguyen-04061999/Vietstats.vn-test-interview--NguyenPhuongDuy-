import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePath = ["/dashboard"];
const authPath = ["/login"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  //   return NextResponse.redirect(new URL("/home", request.url));
  const token = request.cookies.get("token")?.value;
  if (privatePath.some((path) => pathname.startsWith(path)) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (authPath.some((path) => pathname.startsWith(path)) && token) {
    return NextResponse.redirect(new URL("/dashboard/home", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/dashboard/:path*"],
};
