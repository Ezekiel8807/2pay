"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type userTask = {
  _id?: string;
  name?: string;
  level?: number;
  price?: number;
};

//images
import back1 from "../../public/img/a.jpg";
import back2 from "../../public/img/b.jpg";
import back3 from "../../public/img/c.jpg";
import back4 from "../../public/img/d.jpg";

// function to select roundom image
function getroundBackTaskImg() {
  //image array
  const taskBack = [back1, back2, back3, back4];

  const roundomNum = Math.floor(Math.random() * taskBack.length - 1);
  return taskBack[roundomNum];
}

export default function TaskCard({ userTask }: { userTask: userTask }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/tasks/${userTask._id}`)}
      className="group relative w-[200px] h-[200px] shadow-md rounded-lg"
    >
      <Image
        src={{ ...getroundBackTaskImg() }}
        width={200}
        height={200}
        alt="task background image"
        className="w-full h-full rounded-lg"
      />

      <div className="absolute top-0 left-0 p-2 w-[200px] h-[200px] bg-[var(--gray-05)]hover:bg-[var(--green)]">
        <div className="flex flex-col justify-between">
          <div className="w-[40px] h-[40px] rounded-full bg-[] items-center text-center">
            {userTask.level}
          </div>

          <p>{userTask.name}</p>

          <div className=" font-black p-1 w-[60px] text-center left-5 bottom-5 bg-[var(--green)] group-hover:bg-[var(--white)] rounded-lg">
            {`#${userTask.price}`}
          </div>
        </div>
      </div>
    </div>
  );
}
