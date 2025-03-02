"use client";
import { useRouter } from "next/navigation";

type userTask = {
  _id?: string;
  name?: string;
  level?: number;
  price?: number;
};

export default function TaskCard({ userTask }: { userTask: userTask }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/tasks/${userTask._id}`)}
      className="group relative w-[200px] h-[200px] bg-[var(--gray-05)] hover:bg-[var(--green)] shadow-md rounded-lg"
    >
      <div className="flex justify-end p-2">
        <div className="w-[40px] h-[40px] rounded-full bg-[] items-center text-center">
          {userTask.level}
        </div>
        <div className="absolute font-black p-1 w-[60px] text-center left-5 bottom-5 bg-[var(--green)] group-hover:bg-[var(--white)] rounded-lg">
          {`#${userTask.price}`}
        </div>
      </div>

      <p>{userTask.name}</p>
    </div>
  );
}
