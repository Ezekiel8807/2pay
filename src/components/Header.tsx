import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-5">
      <div className="mx-auto w-[100%] md:w-[90%] flex flex-row items-center justify-between">
        <Link className="inline" href="/">
          <h1 className="font-black text-[35px] ">
            <span className="text-[var(--green)]">@</span>pay
          </h1>
        </Link>

        <div className="md:hidden absolute right-5">
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
      </div>
    </header>
  );
}
