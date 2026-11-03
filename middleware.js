import { NextResponse } from "next/server";

// Send mixed-case /chatGPT (and similar) to the canonical lowercase /chatgpt page.
export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname !== "/chatgpt" && pathname.toLowerCase() === "/chatgpt") {
    const url = request.nextUrl.clone();
    url.pathname = "/chatgpt";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/chatGPT", "/ChatGPT", "/CHATGPT", "/Chatgpt"] };
