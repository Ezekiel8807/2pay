import { use } from "react";
import { getToken } from "@/actions/action";
import SideNav from "../SideNav";

export default function DashSideNav() {
  const token = use(getToken());

  return <SideNav token={token} />;
}
