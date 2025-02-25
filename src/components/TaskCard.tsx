"use client";
import { useRouter } from "next/navigation";

type taskCardProbs = {
  task: { id: number; name: string; level: number; price: number };
};

export default function TaskCard({ task }: taskCardProbs) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/task/${task.id}`)}
      className="group relative w-[200px] h-[200px] bg-[var(--gray-05)] hover:bg-[var(--green)] shadow-md rounded-lg"
    >
      <div className="flex justify-end p-2">
        <div className="w-[40px] h-[40px] rounded-full bg-[] items-center text-center">
          {task.level}
        </div>
        <div className="absolute font-black p-1 w-[60px] text-center left-5 bottom-5 bg-[var(--green)] group-hover:bg-[var(--white)] rounded-lg">
          {`#${task.price}`}
        </div>
      </div>

      <p>{task.name}</p>
    </div>
  );
}
