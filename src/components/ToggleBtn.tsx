"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// header links
const links = ["Home", "Blog", "Contact", "Login", "Register"];

export default function ToggleBtn() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      {/* toggle Button */}
      <div
        onClick={() => {
          setMenuIsOpen(!menuIsOpen);
        }}
        className="sm:hidden absolute right-5"
      >
        <Image src="/icons/menu.png" alt="menu icon" width={30} height={30} />
      </div>

      {/* toggle dropdown */}
      <div
        className={`${
          !menuIsOpen && "hidden"
        } absolute top-20 z-10 right-5 bg-[var(--white)] rounded shadow-lg border-b-2 border-[var(--green)] transition-transform scale-100 ease-in-out`}
      >
        <ul className="text-center">
          {links.map((link) => (
            <li key={link} className="w-[200px]">
              <Link
                onClick={() => {
                  setMenuIsOpen(false);
                }}
                className="p-3 block hover:bg-[var(--green)] hover:text-[var(--white)] hover:font-black"
                href={`/${link == "Home" ? "/" : link.toLowerCase()}`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
