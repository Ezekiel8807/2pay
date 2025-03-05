"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// components
import Logout_btn from "./Logout_btn";

const deskLinks = ["Dashboard", "Account", "Transactions", "Upgrade"];

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function SideNav({ token }: { token: any }) {
  const [isLogin, setIsLogin] = useState<boolean>(Boolean(token));
  const [username, setUsername] = useState("Username");

  useEffect(() => {
    if (token != undefined) {
      setIsLogin(Boolean(token));
      setUsername(token.username as string);
    }
  }, [token]);

  return (
    <div className="w-[250px] bg-[var(--green)] p-5 my-5 md:my-10 rounded mx-auto shadow-md">
      <div className="w-[100px] h-[100px] bg-[var(--blue-dark)] shadow-md rounded-full m-auto">
        <Image
          src="/icons/user-139.svg"
          width={100}
          height={100}
          alt="Sde nav pro-photo"
        />
      </div>
      <div className="text-center">
        <span className="font-black mt-2 block text-[var(--white)]">
          Rank: Brass
        </span>
        <h1 className="font-black text-[30px]">{username}</h1>
      </div>

      <nav className="">
        {deskLinks.map((link) => (
          <Link
            className="font-black block p-3 hover:text-[var(--white)]"
            key={link}
            href={`/${link.toLowerCase()}`}
          >
            {link}
          </Link>
        ))}

        {isLogin && (
          <Logout_btn logoutBtnStyle="font-black block p-3 hover:text-[var(--white)]" />
        )}
      </nav>
    </div>
  );
}
