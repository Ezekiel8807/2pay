import User from "@/model/userModel";
import Task from "@/model/taskModel";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function PATCH() {
  try {
    //connect to database
    await connectDB();

    // fetch all users
    const allUsers = await User.find();

    // featch all taskS
    let allTasks = await Task.find();

    // Shuffle tasks for randomness
    allTasks = allTasks.sort(() => Math.random() - 0.5);

    // Distribute tasks to users
    for (const user of allUsers) {
      const tasksToAssign = user.rank || 1; // Default to 2 if rank is unknown
      const assignedTasks = allTasks.splice(0, tasksToAssign); // Assign tasks and remove from the pool

      // Update user's overallTasks count
      user.overallTask += assignedTasks.length;

      // Update the user's tasks and overall task count
      await User.findByIdAndUpdate(user._id, {
        $set: { tasks: assignedTasks }, // Replace entire array
        $inc: { overallTask: assignedTasks.length }, // Ensure consistency with field naming
      });
    }

    //responce
    return NextResponse.json(
      { success: "Tasks Assigned to all users" },
      { status: 200 }
    );
    //
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: `Failed to assign tasks ${err}` },
      { status: 500 }
    );
  }
}
