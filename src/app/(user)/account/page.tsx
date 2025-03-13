/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect } from "next/navigation";
import { getToken } from "@/actions/action";
import User from "../../../model/userModel";
import { connectDB } from "../../../lib/mongodb";

// Components
import AcctBalCom from "@/components/AcctBalCom";
// import Tasks from "@/components/layout/Tasks";
import Performance from "@/components/Performance";
import TaskCard from "@/components/TaskCard";
import BankInfo from "@/components/BankInfo";

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

export default async function Account() {
  const user = await getUser(); // Fetch user data before rendering

  if (!user) {
    return redirect("/login");
  }

  return (
    <div>
      <h1 className="font-black text-[30px]">Account</h1>
      <p>Everything about your account.</p>

      <div className="grid grid-flow-col justify-start gap-5 overflow-x-scroll no-scrollbar  my-3">
        <AcctBalCom
          firstName={user.firstname}
          lastName={user.lastname}
          userRank={user.rank}
          userBalance={parseInt(user.account?.balance) || 0}
        />

        <BankInfo />
      </div>

      <div className="scroll-smooth"></div>

      <div className="flex flex-col md:flex-row">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
