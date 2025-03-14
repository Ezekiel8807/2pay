/* -eslint-disable @typescript-eslint/no-explicit-any- */
import { redirect } from "next/navigation";
import { getToken } from "@/actions/action";
import User from "../../../model/userModel";
import { connectDB } from "../../../lib/mongodb";

// Components

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

  return (
    <>
      <h1 className="font-black text-[30px]">Profile</h1>
      <p>Everything about you.</p>
    </>
  );
}
