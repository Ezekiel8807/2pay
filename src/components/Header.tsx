import Link from "next/link";

export default function Header() {
  return (
    <header className="p-10 md:p-5 bg-green-950">
      <div className="mx-auto w-[60%] flex flex-row items-center justify-between bg-slate-500">
        <Link className="inline" href="/">
          <h1 className="font-black text-3xl ">2pay</h1>
        </Link>

        <div>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </header>
  );
}
