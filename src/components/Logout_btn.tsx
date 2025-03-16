"use client";
import { redirect } from "next/navigation";
// import { logout } from "@/actions/action";

// components
import Button from "./Button";

type Logout_btnProbs = {
  logoutBtnStyle: string;
};

// async function handleLogout() {
//   await logout();
//   redirect("/login");
// }

//Logout function
async function logout() {
  const res = await fetch("/api/auth/logout");
  if (res.redirected) {
    redirect(res.url);
  }
}

export default function Logout_btn({ logoutBtnStyle }: Logout_btnProbs) {
  return (
    <Button disabled={false} btnAction={logout} btnStyle={logoutBtnStyle}>
      Logout
    </Button>
  );
}
