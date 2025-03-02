import { getToken } from "@/actions/action";
import User from "../../../../model/userModel";
import { connectDB } from "../../../../lib/mongodb";

//componentes
import AcctBalCom from "@/components/AcctBalCom";
import Tasks from "@/components/Tasks";

export default async function Dashboard() {
  const token = await getToken();

  //connet to database
  await connectDB();

  //fetch user information
  const user = await User.findOne({ _id: token?.id });
  if (!user) return;

  return (
    <>
      <AcctBalCom userBalance={parseInt(user.account.balance)} />
      <Tasks userName={user.username} />
    </>
  );
}
