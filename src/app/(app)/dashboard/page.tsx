import Task from "../task/page";
import AcctBalCom from "@/components/AcctBalCom";

export default async function Dashboard() {
  // try {
  //   //
  //   const response = await fetch(`http://localhost:3000/dashboard//api`);
  //   const taskInfo = await response.json();
  //   console.log(taskInfo);
  //   //
  // } catch (err) {
  //   console.log(err);
  // }

  return (
    <>
      <AcctBalCom />
      <Task />
    </>
  );
}
