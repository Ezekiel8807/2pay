import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import User from "../../../model/userModel";

export async function GET() {
  try {
    await connectDB(); // Connect to MongoDB
    const users = await User.find();
    return NextResponse.json(users, { status: 200 });
    //
  } catch (err) {
    return NextResponse.json(
      { error: `Failed to fetch users encouunter ${err}` },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const { username, email, password } = await request.json();
  console.log(username, email, password);

  try {
    await connectDB(); // ✅ Ensure database

    const hashPass = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      type: "admin",
      password: hashPass,
    });

    await newUser.save();

    return NextResponse.json(
      { msg: "Users created", users: newUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to create users: ${error}` },
      { status: 500 }
    );
  }
}
