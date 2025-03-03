"use server";
import User from "../../../../../model/userModel";

//task data model
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ userName: string }> }
) {
  const { userName } = await params;

  //fetch data from database
  const user = await User.findOne({ username: userName });
  if (!user) return;

  //respond with data
  return new Response(JSON.stringify(user.task), {
    headers: {
      "Content-Typpe": "application/json",
    },
    status: 200,
  });
}
