import Link from "next/link";
import { getToken } from "@/actions/action";
import User from "../../model/userModel";
import { connectDB } from "../../lib/mongodb";

// components
import NavLink from "../NavLink";
import ToggleBtn from "../ToggleBtn";
import Login_out from "../Login_out";
import NavProfile from "../NavProfile";

// Fetch user data on the server
async function getUser() {
  const token = await getToken();
  if (!token?.id) return undefined;

  await connectDB();
  return await User.findOne({ _id: token.id }).select("username rank");
}

export default async function Header() {
  const user = await getUser();

  return (
    <header className="p-5">
      <div className="mx-auto w-[100%] md:w-[90%] flex flex-row items-center justify-between">
        {/* Logo */}
        <Link className="inline" href={user ? "/dashboard" : "/"}>
          <h1 className="font-black text-[35px]">
            <span className="text-[var(--green)]">@</span>pay
          </h1>
        </Link>

        {/* /*  Navigation Links  */}
        <NavLink />

        {/* User Authentication */}
        {!user ? (
          <Login_out />
        ) : (
          <NavProfile userName={user.username} userRank={user.rank} />
        )}

        {/* Toggle Button */}
        <ToggleBtn token={user ? true : undefined} />
      </div>
    </header>
  );
}
