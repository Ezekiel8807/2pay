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

export default async function Dashboard() {
  const user = await getUser(); // Fetch user data before rendering

  if (!user) {
    return redirect("/login");
  }

  // filter tasks that have new state
  const filterUserTask = user.tasks.filter(
    (e: { state: string }) => e.state === "new"
  );

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-end gap-5">
        <AcctBalCom
          firstName={user.firstname}
          lastName={user.lastname}
          userRank={user.rank}
          userBalance={parseInt(user.account?.balance) || 0}
        />
        <Performance
          Overall={user.overallTask}
          Completed={user.completedTask}
        />
      </div>

      <h1 className="font-black text-[30px] mt-5">Tasks</h1>
      <p>Earn real cash for completing task.</p>

      <div className="bg-[var(--gray-01)] h-[250px] p-5 my-5 rounded">
        <div className="grid grid-flow-col justify-start gap-5 overflow-x-scroll no-scrollbar">
          {filterUserTask.length > 0 ? (
            filterUserTask.map(
              (task: {
                _id: any;
                level: any;
                media: any;
                price: any;
                socialTarget: any;
              }) => {
                const { _id, level, media, price, socialTarget } = task;
                return (
                  <TaskCard
                    key={_id}
                    userTask={{ _id, level, media, price, socialTarget }}
                  />
                );
              }
            )
          ) : (
            <p className="flex items-center justify-center h-full">
              Opps.. tasks unavailable
            </p>
          )}
        </div>
      </div>
    </>
  );
}
