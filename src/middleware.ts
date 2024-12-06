import React from "react";
import { NextResponse } from "next/server";

export default function middleware(request: any) {
  if (request.cookies.get("authToken")) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/signin", request.url));
}

export const config = {
  matcher: ["/dashboard"],
};
