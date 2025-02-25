"use server";
import { users } from "@/utils/data";

//task data model
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ userId: string; taskId: string }> }
) {
  const { userId, taskId } = await params;

  //fetch data from database
  const user = users.find((user) => user.id === parseInt(userId));
  const userTask = user?.task?.find((task) => task.id === parseInt(taskId));

  //respond with data
  return Response.json(userTask);
}
