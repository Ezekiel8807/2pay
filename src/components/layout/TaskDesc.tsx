"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

//components
import Button from "@/components/Button";

type TaskDescProbs = {
  userName: string;
  taskId: string;
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

export default function TaskDesc({ userName, taskId }: TaskDescProbs) {
  const [taskInfo, setTaskInfo] = useState<Task>({});

  useEffect(() => {
    async function getTaskInfo() {
      //
      try {
        //
        // const res = await fetch(`/api/users/${userName}/tasks/${taskId}`);
        const res = await fetch(
          `http://localhost:3000/api/users/${userName}/tasks/${taskId}`
        );

        const data = await res.json();
        setTaskInfo({ ...data.userTask });

        //
      } catch (err) {
        console.log(err);
      }
    }

    //
    getTaskInfo();

    //
  }, [userName, taskId]);

  return (
    <>
      {taskInfo && (
        <>
          <h1 className="font-black text-2xl mb-3 md:mb-0">Task Details</h1>

          <div className="inline-block relative align-top w-[100%] md:w-[60%]">
            <div className="block text-end">
              <div className="w-[80px] md:w-[80px] p-2 md:mx-3 float-end rounded-lg bg-[var(--green)]">
                <span className="font-bold text-white">Level:</span>
                <span className="font-bold ms-3">{taskInfo.level}</span>
              </div>
            </div>

            <div className="block mb-5">
              <h2 className="text-xl font-bold mt-5 mb-2 md:mt-3 md:mb-3 underline">
                Instruction
              </h2>
              <p className="w-full">{taskInfo.instruction}</p>
            </div>
          </div>

          <div className="inline-block align-top w-[100%] md:w-[40%] p-5 bg-[var(--gray-01)] ">
            <h2 className="text-xl font-bold underline">Media</h2>
            <div className="grid grid-cols-1">
              <div className="bg">
                {taskInfo.media?.type === "image" && (
                  <>
                    <Image
                      className="w-full "
                      src={taskInfo.media!.content || "/img/a.png"}
                      width="100"
                      height="50"
                      alt="task media image"
                    />
                    <a
                      className="flex justify-end"
                      href={taskInfo.media!.content}
                      download
                    >
                      Download
                    </a>
                  </>
                )}

                {taskInfo.media?.type === "video" && (
                  <>
                    <video
                      src={taskInfo.media?.content}
                      width={100}
                      height={50}
                      muted
                      loop
                      autoPlay
                    >
                      play me
                    </video>
                    <a
                      className="float-end py-1 px-3 bg-[var(--green)] disabled:bg-[var(--gray-10)] text-white"
                      href={taskInfo.media.content}
                      download
                    >
                      Download
                    </a>
                  </>
                )}

                {taskInfo.media?.type === "link" && (
                  <div className="w-full h-[100px] my-3 bg-[var(--gray-10)] flex items-center justify-center">
                    Copy the link below
                  </div>
                )}
              </div>
            </div>

            <h2 className="text-xl font-bold mt-5 underline">Link</h2>
            <div className="flex my-3">
              <input
                className="w-[70%] p-1 outline-none"
                type="text"
                readOnly
                value={
                  taskInfo.media?.type === "link"
                    ? taskInfo.media!.content
                    : "No link avaliable!"
                }
              />

              <Button
                btnStyle="w-[30%] bg-[var(--green)] disabled:bg-[var(--gray-10)] text-white"
                disabled={taskInfo.media?.type !== "link"}
              >
                Copy
              </Button>
            </div>
          </div>

          <div className="w-[100%] md:w-[60%] mb-10">
            <h1 className="w-[200px] font-black text-3xl text-center mb-0 p-10 md:p-0 md:mb-5 m-auto">
              Task Submition
            </h1>

            <div className="flex w-[100%] bg-red-500 p-5">
              <div className="grid grid-cols-2">
                <div className="w-full"></div>
                <div className="w-full p-5"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
