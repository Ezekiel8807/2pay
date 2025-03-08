import { redirect } from "next/navigation";
import { getToken } from "@/actions/action";

//components
import TaskDesc from "@/components/layout/TaskDesc";

export default async function TaskDetails({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const token = await getToken();
  const { taskId } = await params;

  //
  //

  if (!token) {
    return redirect("/login");
  }

  //

  return (
    <TaskDesc userName={token.username as string} taskId={taskId as string} />
  );
}
