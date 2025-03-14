import { redirect } from "next/navigation";
import { getToken } from "@/actions/action";
import User from "../../../model/userModel";
import { connectDB } from "../../../lib/mongodb";

// Components
import BankInfo from "@/components/BankInfo";
import TransCard from "@/components/TransCard";
import AcctBalCom from "@/components/AcctBalCom";
import SubHeading from "@/components/SubHeading";

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
      <SubHeading title="Account" desc="Everything about your account." />

      <div className="grid grid-flow-col justify-start gap-5 overflow-x-scroll no-scrollbar  my-3">
        <div className="w-[275px] h-[130px] md:w-[300px]">
          <AcctBalCom
            firstName={user.firstname}
            lastName={user.lastname}
            userRank={user.rank}
            userBalance={parseInt(user.account?.balance) || 0}
          />
        </div>

        <BankInfo />
      </div>

      <div className="scroll-smooth"></div>

      <div className="flex flex-col md:flex-row">
        <div>
          <SubHeading
            title="Transaction"
            desc="Transaction history right here."
          />
          <div className="w-[100%] h-[200px] py-3 overflow-y-scroll">
            <TransCard />
            <TransCard />
            <TransCard />
            <TransCard />
            <TransCard />
          </div>
        </div>
      </div>
    </div>
  );
}
