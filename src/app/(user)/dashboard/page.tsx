import { getToken } from "@/actions/action";
import User from "../../../model/userModel";
import { connectDB } from "../../../lib/mongodb";

// Components
import AcctBalCom from "@/components/AcctBalCom";
import Tasks from "@/components/layout/Tasks";

// Fetch user data on the server
async function getUser() {
  const token = await getToken();
  if (!token?.id) return null;

  await connectDB();
  return await User.findOne({ _id: token.id }).select(
    "username account.balance"
  );
}

export default async function Dashboard() {
  const user = await getUser(); // Fetch user data before rendering

  if (!user) return <p>User not found</p>;

  return (
    <>
      <AcctBalCom userBalance={parseInt(user.account?.balance) || 0} />
      <Tasks userName={user.username} />
    </>
  );
}
