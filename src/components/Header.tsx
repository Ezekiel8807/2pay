"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = ["Home", "Blog", "Contact", "Login", "Register"];
const deskLinks = ["How To Start", "Blog", "Busniess"];

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className="p-5">
      <div className="mx-auto w-[100%] md:w-[90%] flex flex-row items-center justify-between">
        <Link className="inline" href="/">
          <h1 className="font-black text-[35px] ">
            <span className="text-[var(--green)]">@</span>pay
          </h1>
        </Link>

        <nav className="hidden lg:block">
          {deskLinks.map((l) => (
            <Link
              className="font-black p-3 hover:text-[var(--green)]"
              key={l}
              href={`/${l}`}
            >
              {l}
            </Link>
          ))}
        </nav>

        <div
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
          className="sm:hidden absolute right-5"
        >
          <Image src="/menu-icon.png" alt="menu icon" width={30} height={30} />
        </div>

        <div className="hidden sm:block">
          <Link
            className="w-[60px] inline-block font-black text-center p-2 text-[var(--black)] hover:text-[var(--green)]"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="w-[100px] inline-block font-black text-center rounded-full p-2 text-[var(--white)] bg-[var(--green)] "
            href="/register"
          >
            Register
          </Link>
        </div>

        <div
          className={`${
            !menuIsOpen && "hidden"
          } absolute top-20 z-10 right-5 bg-[var(--white)] rounded shadow-lg border-b-2 border-[var(--green)] transition-transform scale-100 ease-in-out`}
        >
          <ul className="text-center">
            {links.map((link) => (
              <li key={link} className="w-[200px]">
                <Link
                  className="p-3 block hover:bg-[var(--green)] hover:text-[var(--white)] hover:font-black"
                  href={`/${link}`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
