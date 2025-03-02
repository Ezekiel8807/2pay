import Link from "next/link";
import { getToken } from "@/actions/action";
import User from "../../../model/userModel";
import { connectDB } from "../../../lib/mongodb";

//components
import ToggleBtn from "../ToggleBtn";
import NavProfile from "../NavProfile";
import Login_out from "../Login_out";
import NavLink from "../NavLink";

export default async function Header() {
  const token = await getToken();

  //connet to database
  await connectDB();

  //fetch user information
  const user = await User.findOne({ _id: token?.id });
  // if (!user) return;

  return (
    <header className="p-5">
      <div className="mx-auto w-[100%] md:w-[90%] flex flex-row items-center justify-between">
        {/* logo */}
        <Link className="inline" href={!token ? "/" : "/dashboard"}>
          <h1 className="font-black text-[35px] ">
            <span className="text-[var(--green)]">@</span>pay
          </h1>
        </Link>

        {/* <Navlinks /> */}
        <NavLink />

        {/* navlinks on user login */}

        {/* header sider login/logout or profile  */}
        {!token && <Login_out />}

        {token && (
          <NavProfile
            userName={user.username as string}
            userRank={user.rank as number}
          />
        )}

        {/* toggle botton */}
        <ToggleBtn token={token} />
      </div>
    </header>
  );
}
