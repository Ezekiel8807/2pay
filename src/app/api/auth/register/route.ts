import bcrypt from "bcrypt";
import Task from "@/model/taskModel";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

//register function
export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json();

    if (!username || !email || !password)
      throw new Error("All frields require");

    // ✅database connection
    await connectDB();

    //check existing User
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      if (existingUser.username == username || existingUser.email == email)
        throw new Error("User Exist!");
    }

    //hash password
    const hashPass = await bcrypt.hash(password, 10);

    //get task from task database
    const task = await Task.aggregate([{ $sample: { size: 1 } }]);

    // If no tasks are available, proceed without assigning a task
    const assignedTask = task.length > 0 ? task[0] : null;

    // Create the user with the task in their `tasks` array
    const newUser = new User({
      username: username,
      email: email,
      tasks: !assignedTask ? [] : [assignedTask], // Assign the task if available
      password: hashPass,
    });

    //save new user
    await newUser.save();

    // Redirect user
    // return NextResponse.redirect(new URL("/login", request.url));
    return NextResponse.json(
      { success: `Account created Successfully` },
      { status: 201 }
    );
    //
    //
  } catch (err) {
    return NextResponse.json(
      { error: `Failed to create users: ${err}` },
      { status: 500 }
    );
    // return new Response(JSON.stringify({ error: "Wrong credentials" }), {
    //   headers: { "Content-Type": "application/json" },
    //   status: 500,
    // });
  }
}
