"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type userTask = {
  _id?: string;
  level?: number;
  price?: number;
};

//images
import back1 from "../../public/img/a.jpg";
import back2 from "../../public/img/b.jpg";
import back3 from "../../public/img/c.jpg";

export default function TaskCard({ userTask }: { userTask: userTask }) {
  const router = useRouter();

  // function to select roundom image
  function getroundBackTaskImg() {
    // image array
    const taskBack = [back1, back2, back3];

    const roundomNum = Math.floor(Math.random() * taskBack.length - 1);
    return taskBack[roundomNum];
  }

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

      <div className="absolute top-0 left-0  w-[200px] h-[200px] ">
        <div className="w-full h-full p-2 rounded-lg">
          <div className="flex flex-row p-3 justify-end ">
            <div className="flex flex-row justify-between items-center w-[100px] bg-[var(--green)] rounded-full">
              <div className="w-[30px] h-[30px] p-2 rounded-full bg-[var(--white)]">
                <Image
                  src={back2}
                  width={100}
                  alt="social icons"
                  className="m-auto"
                />
              </div>
              <span className="mx-3 font-black text-[12px]">
                Level: {userTask.level}
              </span>
            </div>
          </div>

          <div className=" absolute font-black p-1 w-[60px] text-center left-5 bottom-5 bg-[var(--green)] text-[var(--white)] rounded-lg">
            {`#${userTask.price}`}
          </div>
        </div>
      </div>
    </div>
  );
}
