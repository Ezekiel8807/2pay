"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

//

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ToggleBtn({ token }: any) {
  const [isLogin, setIslogin] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    if (token != undefined) {
      setIslogin(true);
    }
  }, [token]);

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
        <nav className="text-center">
          {!isLogin && (
            <Link
              onClick={() => {
                setMenuIsOpen(false);
              }}
              className="p-3 block w-[200px] hover:bg-[var(--green)] hover:text-[var(--white)] hover:font-black"
              href="/"
            >
              Home
            </Link>
          )}

          {!isLogin && (
            <Link
              onClick={() => {
                setMenuIsOpen(false);
              }}
              className="p-3 block w-[200px] hover:bg-[var(--green)] hover:text-[var(--white)] hover:font-black"
              href="/blog"
            >
              Blog
            </Link>
          )}

          {!isLogin && (
            <Link
              onClick={() => {
                setMenuIsOpen(false);
              }}
              className="p-3 block w-[200px] hover:bg-[var(--green)] hover:text-[var(--white)] hover:font-black"
              href="/about"
            >
              About
            </Link>
          )}

          {isLogin && (
            <Link
              onClick={() => {
                setMenuIsOpen(false);
              }}
              className="p-3 block w-[200px] hover:bg-[var(--green)] hover:text-[var(--white)] hover:font-black"
              href="/dashboard"
            >
              Dashboard
            </Link>
          )}

          {isLogin && (
            <Link
              onClick={() => {
                setMenuIsOpen(false);
              }}
              className="p-3 block w-[200px] hover:bg-[var(--green)] hover:text-[var(--white)] hover:font-black"
              href="/account"
            >
              Account
            </Link>
          )}

          {isLogin && (
            <Link
              onClick={() => {
                setMenuIsOpen(false);
              }}
              className="p-3 block w-[200px] hover:bg-[var(--green)] hover:text-[var(--white)] hover:font-black"
              href="/transactions"
            >
              Transactions
            </Link>
          )}

          {isLogin && (
            <Link
              onClick={() => {
                setMenuIsOpen(false);
              }}
              className="p-3 block w-[200px] hover:bg-[var(--green)] hover:text-[var(--white)] hover:font-black"
              href="/upgrade"
            >
              Upgrade
            </Link>
          )}

          {!isLogin && (
            <Link
              onClick={() => {
                setMenuIsOpen(false);
              }}
              className="p-3 block w-[200px] hover:bg-[var(--green)] hover:text-[var(--white)] hover:font-black"
              href="/login"
            >
              Login
            </Link>
          )}

          {!isLogin && (
            <Link
              onClick={() => {
                setMenuIsOpen(false);
              }}
              className="p-3 block w-[200px] hover:bg-[var(--green)] hover:text-[var(--white)] hover:font-black"
              href="/register"
            >
              Register
            </Link>
          )}

          {isLogin && (
            <Link
              onClick={() => {
                setMenuIsOpen(false);
              }}
              className="p-3 block w-[200px] hover:bg-[var(--green)] hover:text-[var(--white)] hover:font-black"
              href="/logout"
            >
              Logout
            </Link>
          )}
        </nav>
      </div>
    </>
  );
}
