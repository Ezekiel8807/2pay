import Link from "next/link";

const deskLinks = ["Dashboard", "Account", "Transactions", "Logout"];

export default function DashSideNav() {
  return (
    <div className="w-[250px] bg-[var(--green)] p-5 my-5 md:my-10 rounded mx-auto shadow-md">
      <div className="w-[100px] h-[100px] bg-[var(--blue-dark)] shadow-md rounded-full m-auto"></div>
      <div className="text-center">
        <span className="font-black mt-2 block text-[var(--white)]">
          Type: Brass
        </span>
        <h1 className="font-black text-[30px]">Ezekiel8807</h1>
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
      </nav>
    </div>
  );
}
