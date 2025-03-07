import User from "@/model/userModel";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

type Task = {
  _id?: string;
  name?: string;
  level?: number;
  price?: number;
  state?: string;
  link?: string;
  media?: {
    type?: "link" | "image" | "video";
    content?: string;
  };
  ispaid?: boolean;
  instruction?: string;
};

//task data model
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ userName: string; taskId: string }> }
) {
  const { userName, taskId } = await params;

  try {
    // connect to database
    await connectDB();

    //fetch data from database
    const user = await User.findOne({ username: userName });
    if (!user) throw new Error("no user found");
    console.log(user);
    console.log(taskId);
    //

    const userTask = await user.tasks.find((task: Task) => task._id === taskId);
    if (!userTask) throw new Error("no task found");
    console.log(userTask);

    //respond with dat
    return NextResponse.json({ userTask }, { status: 200 });

    //
  } catch (err) {
    console.log(err);
  }
}
