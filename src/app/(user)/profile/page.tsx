/* -eslint-disable @typescript-eslint/no-explicit-any- */
import { redirect } from "next/navigation";
import { getToken } from "@/actions/action";
import User from "../../../model/userModel";
import { connectDB } from "../../../lib/mongodb";

// Components
import SubHeading from "@/components/SubHeading";
import Image from "next/image";
import Button from "@/components/Button";
import PersonalProUpdate from "@/components/proUpdate/PersonalProUpdate";
import AcctProUpdate from "@/components/proUpdate/AcctProUpdate";

// Fetch user data on the server
async function getUser() {
  const token = await getToken();
  if (!token?.id) return null;

  //db connection
  await connectDB();

  // Find user and populate tasks
  const user = await User.findOne({ _id: token.id }).populate("tasks");

  // Convert user data to a plain JavaScript object
  return JSON.parse(JSON.stringify(user));
}

export default async function Profile() {
  const user = await getUser(); // Fetch user data before rendering

  if (!user) {
    return redirect("/login");
  }

  const { firstname, lastname, username, rank, email } = user;
  const { bankName, bankAcctNo } = user.account.withdrawer;
  const fullname = `${lastname} ${firstname}`;

  return (
    <div className="w-[100%] sm:w-[90%]  m-auto">
      <SubHeading title="Profile" desc="Everything about you." />
      <div className="flex mb-5 justify-end ">
        <div className="flex items-center gap-2">
          <div className="text-right">
            <h1 className="font-black text-[16px] md:text-[20px]">
              {fullname}
            </h1>
            <h3 className="font-normal md:text-[20px]">{username}</h3>
            <p className="font-bold text-[10px] md:text-[16px]">Rank {rank}</p>
          </div>
          <Image
            src="/icons/user-139.svg"
            width="100"
            height="100"
            alt="User profile image"
            className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-top justify-between gap-5">
        <PersonalProUpdate
          userpersonalData={{ firstname, lastname, username, email }}
        />
        <AcctProUpdate userAcctData={{ fullname, bankName, bankAcctNo }} />
      </div>

      <div className="w-full my-5 p-5 bg-[var(--green)] rounded-lg">
        <h2 className="font-black text-2xl text-white mb-5">Change Password</h2>

        <form>
          <div className="flex flex-col gap-5 mb-5 items-center justify-between">
            <div className="w-[100%] flex flex-col md:flex-row justify-between">
              <label htmlFor="firstname">Old password: </label>
              <input
                className="w-[100%] md:w-[70%] outline-none bg-none border-b-2 p-1"
                type="text"
                name="firstname"
                id="firstname"
              />
            </div>

            <div className="w-[100%] flex flex-col md:flex-row justify-between">
              <label htmlFor="firstname">New password: </label>
              <input
                className="w-[100%] md:w-[70%] outline-none bg-none border-b-2 p-1"
                type="text"
                name="firstname"
                id="firstname"
              />
            </div>
          </div>

          <div className="w-[100%] flex flex-col md:flex-row justify-between">
            <label htmlFor="firstname">Comfirm new password: </label>
            <input
              className="w-[100%] md:w-[70%] outline-none bg-none border-b-2 p-1"
              type="text"
              name="firstname"
              id="firstname"
            />
          </div>

          <div className="text-right">
            <Button btnStyle="w-[150px] font-bold p-2 mt-5 shadow-lg bg-[var(--white)] rounded-lg">
              Change password
            </Button>
          </div>
        </form>
      </div>

      <Button btnStyle="w-full font-black block p-3 text-center bg-red-600 text-white mb-5 ">
        Delete account
      </Button>
    </div>
  );
}
