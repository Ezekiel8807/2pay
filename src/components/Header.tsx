"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const links = ["Home", "Blog", "Contact", "Login", "Register"];
  return (
    <header className="p-5">
      <div className="mx-auto w-[100%] md:w-[90%] flex flex-row items-center justify-between">
        <Link className="inline" href="/">
          <h1 className="font-black text-[35px] ">
            <span className="text-[var(--green)]">@</span>pay
          </h1>
        </Link>

        <div
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
          className="md:hidden absolute right-5"
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
          } absolute top-20 z-10 right-5 bg-[var(--white)] rounded shadow-lg border-b-2 border-[var(--green)]`}
        >
          <ul className="text-center">
            {links.map((link) => (
              <Link
                className="w-[200px] p-2 block hover:bg-[var(--green)] hover:text-[var(--white)] hover:font-black"
                key={link}
                href={`/${link}`}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
