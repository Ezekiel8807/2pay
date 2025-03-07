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
