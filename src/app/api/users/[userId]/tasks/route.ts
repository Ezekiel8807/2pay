"use server";
import { users } from "@/utils/data";

//task data model
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;

  //fetch data from database
  const user = users.find((user) => user.id === parseInt(userId));

  //respond with data
  return Response.json({ userTasks: user?.task });
}
