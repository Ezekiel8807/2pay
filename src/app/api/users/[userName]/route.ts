"use server";
import User from "../../../../model/userModel";
import { connectDB } from "../../../../lib/mongodb";
import { NextResponse } from "next/server";

//task data model
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ userName: string }> }
) {
  const { userName } = await params;

  try {
    //connect to database
    await connectDB();

    //fetch data from database
    const user = await User.findOne({ username: userName });

    // user not found
    if (!user) throw new Error("no user found");

    //respond with data

    return NextResponse.json(
      { success: "user data", user: user },
      { status: 200 }
    );

    //
  } catch (err) {
    //respond with data
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
