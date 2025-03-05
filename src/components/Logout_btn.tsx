"use client";
import { redirect } from "next/navigation";

// components
import Button from "./Button";

type Logout_btnProbs = {
  logoutBtnStyle: string;
};

export default function Logout_btn({ logoutBtnStyle }: Logout_btnProbs) {
  //Logout function
  const logout = async () => {
    const res = await fetch("/api/auth/logout");
    if (res.redirected) {
      redirect(res.url);
    }
  };

  return (
    <Button disabled={false} btnAction={logout} btnStyle={logoutBtnStyle}>
      Logout
    </Button>
  );
}
