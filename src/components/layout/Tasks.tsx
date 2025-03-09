"use client";
import TaskCard from "@/components/TaskCard";
import { useEffect, useState } from "react";

type TaskProbs = {
  userName: string;
};

type Task = {
  _id?: string;
  name?: string;
  level?: number;
  price?: number;
  state?: string;
  link?: string;
  media?: {
    type?: "link" | "image" | "video";
    content?: string;
  };
  ispaid?: boolean;
  instruction?: string;
};

export default function Tasks({ userName }: TaskProbs) {
  const [dailyTasks, setDailyTasks] = useState<Task[]>([]);

  // Fetch tasks from an API or data source
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`/api/users/${userName}/tasks`);
        const data = await response.json();

        if (data != undefined) {
          setDailyTasks(data);
        } else {
          setDailyTasks([]);
        }
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    fetchTasks();
  }, [userName]);

  return (
    <div className="">
      <h1 className="font-black text-[30px] mt-5">Tasks</h1>
      <p>Earn real cash for completing task.</p>

      <div className="bg-[var(--gray-01)] h-[250px] p-5 my-5 rounded">
        <div className="mx-auto grid grid-flow-col gap-5 overflow-x-scroll no-scrollbar">
          {dailyTasks.length > 0 ? (
            dailyTasks.map((dailyTask) => {
              const { _id, level, price } = dailyTask;
              return <TaskCard key={_id} userTask={{ _id, level, price }} />;
            })
          ) : (
            <p className="flex items-center justify-center h-full">
              Opps.. tasks unavailable
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
