"use server";
import User from "../../../../../model/userModel";
import { connectDB } from "../../../../../lib/mongodb";

//task data model
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;

  //connect to database
  await connectDB();

  //fetch data from database
  const user = User.findOne({ _id: userId });

  if (!user) return;
  //respond with data
  return Response.json(user);
}
