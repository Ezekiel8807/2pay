import TaskCard from "@/components/TaskCard";

type UserType = {
  id: number;
  name: string;
  level: number;
  price: number;
  link: string;
  state: string;
  media: {
    type: "link" | "image" | "video";
    file: string;
  };
};

export default async function Task() {
  const userId = 1;
  const respond = await fetch(
    `http://localhost:3000/api/users/${userId}/tasks`
  );
  const data = await respond.json();
  const dailyTask = data.userTasks;

  return (
    <div className="">
      <h1 className="font-black text-[30px] mt-5">Tasks</h1>
      <p>Earn real cash for completing task.</p>

      <div className="bg-[var(--gray-01)] h-[250px] p-5 my-5 rounded">
        <div className="mx-auto grid grid-flow-col gap-5 overflow-x-scroll no-scrollbar">
          {dailyTask.map((task: UserType) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}
