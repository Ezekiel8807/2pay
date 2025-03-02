import Image from "next/image";
import User from "../../model/userModel";
import { getToken } from "@/actions/action";
import { connectDB } from "../../lib/mongodb";

export default async function NavProfile() {
  const token = await getToken();

  //connet to database
  await connectDB();

  //fetch user information
  const user = await User.findOne({ _id: token?.id });
  if (!user) return;

  return (
    <>
      {token && (
        <div className=" w-[160px] flex flex-end">
          <div className="grid grid-cols-1 sm:grid-cols-2  items-center gap-2">
            <div className="hidden sm:block">
              <Image
                src={"/icons/user-139.svg"}
                width={40}
                height={40}
                className="float-end"
                alt="nav profile photo link"
              />
            </div>
            <div className="hidden sm:block">
              <h3 className="font-black mb-0 text-[15px]">{user.username}</h3>
              <span className="font-black text-[10px]">
                {user.rank as number}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
