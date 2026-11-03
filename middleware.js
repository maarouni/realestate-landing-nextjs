import { NextResponse } from "next/server";

// Send mixed-case /chatGPT and /co-pilot style links to the canonical /chatgpt and /copilot pages.
export function middleware(request) {
  const { pathname } = request.nextUrl;
  const lower = pathname.toLowerCase();
  const target = lower === "/chatgpt" ? "/chatgpt" : (lower === "/co-pilot" || lower === "/copilot") ? "/copilot" : null;
  if (target && pathname !== target) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/chatGPT", "/ChatGPT", "/CHATGPT", "/Chatgpt", "/co-pilot", "/Co-Pilot", "/Co-pilot", "/CoPilot", "/Copilot"] };
