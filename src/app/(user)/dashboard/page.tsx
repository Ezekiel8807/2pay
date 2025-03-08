import { redirect } from "next/navigation";
import { getToken } from "@/actions/action";
import User from "../../../model/userModel";
import { connectDB } from "../../../lib/mongodb";

// Components
import AcctBalCom from "@/components/AcctBalCom";
import Tasks from "@/components/layout/Tasks";
import Performance from "@/components/Performance";

// Fetch user data on the server
async function getUser() {
  const token = await getToken();
  if (!token?.id) return null;

  //db connection
  await connectDB();

  //user data returned
  return await User.findOne({ _id: token.id }).select(
    "username account.balance missedTask completedTask"
  );
}

export default async function Dashboard() {
  const user = await getUser(); // Fetch user data before rendering

  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-end gap-5">
        <AcctBalCom userBalance={parseInt(user.account?.balance) || 0} />
        <Performance Missed={user.missedTask} Completed={user.completedTask} />
      </div>

      <Tasks userName={user.username} />
    </>
  );
}
