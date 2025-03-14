"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

// components
import Logout_btn from "./Logout_btn";

// Define Props Type
interface ToggleBtnProps {
  token: boolean | undefined;
}

export default function ToggleBtn({ token }: ToggleBtnProps) {
  const [isLogin, setIsLogin] = useState<boolean>(Boolean(token));
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  // Listen for token updates dynamically
  useEffect(() => {
    setIsLogin(Boolean(token));
  }, [token]);

  // Toggle Menu Handler
  const toggleMenu = useCallback(() => {
    setMenuIsOpen((prev) => !prev);
  }, []);

  // Define Navigation Links
  const menuItems = [
    { label: "Home", href: "/", show: !isLogin },
    { label: "Blog", href: "/blog", show: !isLogin },
    { label: "About", href: "/about", show: !isLogin },
    { label: "Dashboard", href: "/dashboard", show: isLogin },
    { label: "Profile", href: "/profile", show: isLogin },
    { label: "Account", href: "/account", show: isLogin },
    { label: "Transactions", href: "/transactions", show: isLogin },
    { label: "Upgrade", href: "/upgrade", show: isLogin },
    { label: "Login", href: "/login", show: !isLogin },
    { label: "Register", href: "/register", show: !isLogin },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        aria-expanded={menuIsOpen}
        aria-label="Toggle navigation menu"
        className="md:hidden absolute right-5"
      >
        <Image
          src="/icons/menu.png"
          alt="menu icon"
          width={30}
          height={30}
          style={{ width: "auto", height: "auto" }}
        />
      </button>

      {/* Toggle Dropdown */}
      <div
        className={`${
          !menuIsOpen ? "hidden" : "block"
        } absolute top-20 z-10 right-5 bg-[var(--white)] rounded shadow-lg border-b-2 border-[var(--green)] transition-transform scale-100 ease-in-out`}
      >
        <nav className="text-center">
          {menuItems.map(
            (item) =>
              item.show && (
                <Link
                  key={item.href}
                  onClick={() => setMenuIsOpen(false)}
                  className="p-3 block w-[200px] hover:bg-[var(--green)] hover:text-[var(--white)] hover:font-black"
                  href={item.href}
                >
                  {item.label}
                </Link>
              )
          )}
          {isLogin && (
            <Logout_btn logoutBtnStyle="p-3 block w-[200px] hover:bg-[var(--green)] hover:text-[var(--white)] hover:font-black" />
          )}
        </nav>
      </div>
    </>
  );
}
