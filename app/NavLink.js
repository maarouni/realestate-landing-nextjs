"use client";

import { usePathname } from "next/navigation";

// Header link that highlights itself when the current page is in its section.
// e.g. href="/blog" is active on /blog and on /blog/zipcode-market-analysis.
export default function NavLink({ href, style, children, ...rest }) {
  const pathname = usePathname() || "/";
  const active = pathname === href || pathname.startsWith(href + "/");

  const activeStyle = active
    ? {
        backgroundColor: "#2563eb",
        color: "#ffffff",
        borderRadius: "20px",
      }
    : {};

  return (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      data-active={active ? "true" : "false"}
      style={{ ...style, ...activeStyle }}
      {...rest}
    >
      {children}
    </a>
  );
}
