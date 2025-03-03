"use server";
import { tasks } from "@/utils/data";

//task data model
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await params;

  //fetch data from database
  const taskInfo = tasks.find((task) => task.id === parseInt(taskId));

  //respond with data
  return Response.json(taskInfo);
}
