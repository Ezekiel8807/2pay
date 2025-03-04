import { logout } from "@/actions/action";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // awaiting logout function
  await logout();

  //redirect user to login page
  return NextResponse.redirect(new URL("/login", request.url));
}
