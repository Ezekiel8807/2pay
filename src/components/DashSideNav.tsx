import { use } from "react";
import { getToken } from "@/actions/action";
import SideNav from "./SideNav";

export default function DashSideNav() {
  const token = use(getToken());
  // logout function
  // const userLogout = async () => {
  //   await deleteToken();
  //   redirect("/login");
  // };

  return <SideNav token={token} />;
}
