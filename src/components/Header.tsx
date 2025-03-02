import Link from "next/link";

//components
import ToggleBtn from "./ToggleBtn";
import NavProfile from "./NavProfile";
import Login_out from "./Login_out";

export default async function Header() {
  return (
    <header className="p-5">
      <div className="mx-auto w-[100%] md:w-[90%] flex flex-row items-center justify-between">
        {/* logo */}
        <Link className="inline" href="/">
          <h1 className="font-black text-[35px] ">
            <span className="text-[var(--green)]">@</span>pay
          </h1>
        </Link>

        {/* <Navlinks at user logout/> */}

        {/* navlinks on user login */}

        {/* header sider login/logout or profile  */}
        <Login_out />

        <NavProfile />

        {/* toggle botton */}
        <ToggleBtn />
      </div>
    </header>
  );
}
