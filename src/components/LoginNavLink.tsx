"use client";
import Link from "next/link";

const links = ["How To Start", "Blog", "Busniess"];

export default function LoginNavLink() {
  return (
    <nav className="hidden lg:block">
      {links.map((link) => (
        <Link
          className="font-black p-3 hover:text-[var(--green)]"
          key={link}
          href={`/${link}`}
        >
          {link}
        </Link>
      ))}
    </nav>
  );
}
