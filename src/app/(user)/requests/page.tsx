import { Requests } from "@/utils/data";
// import { redirect } from "next/navigation";
// import { getToken } from "@/actions/action";
// import User from "../../../model/userModel";
// import { connectDB } from "../../../lib/mongodb";

// // Components
import Main from "@/components/layout/Main";
import SubHeading from "@/components/SubHeading";
import DepositCard from "@/components/request/DepositCard";
import WithdrawCard from "@/components/request/WithdrawCard";

// Fetch user data on the server
// async function getRequests() {
//   const token = await getToken();
//   if (!token) throw new Error("User not login!");

//   if (token.isAdmin != true) {
//     return redirect("/dashboard");
//   }

//   //db connection
//   //   await connectDB();

//   // Find user and populate tasks
//   //   const user = await User.findOne({ _id: token.id }).populate("tasks");

//   // Convert user data to a plain JavaScript object
//   //   return JSON.parse(JSON.stringify(user));
//   return Requests;
// }

export default async function page() {
  //   const requests = await getRequests();

  console.log(Requests);
  return (
    <Main>
      <SubHeading
        title="Requests"
        desc="Deposit and withdrawal confirmation."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-5 gap-5">
        {Requests.map((request) =>
          request.type == "deposit" ? (
            <DepositCard key={request.id} />
          ) : (
            <WithdrawCard key={request.id} />
          )
        )}
      </div>
    </Main>
  );
}
