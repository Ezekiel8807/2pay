import Image from "next/image";
import mongoose from "mongoose";
import User from "@/model/userModel";
// import Task from "@/model/taskModel";
import { connectDB } from "@/lib/mongodb";
import { redirect } from "next/navigation";
import { getToken } from "@/actions/action";

//components
import Button from "@/components/Button";

export default async function TaskDetails({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const token = await getToken();
  const { taskId } = await params;
  //
  // tokec check
  if (!token) {
    return redirect("/login");
  }

  // datase connection
  await connectDB();

  // fetch the task
  const user = await User.findOne({ username: token.username }).populate(
    "tasks"
  );

  // Convert `taskId` to ObjectId if necessary
  const taskObjectId = mongoose.Types.ObjectId.isValid(taskId)
    ? new mongoose.Types.ObjectId(taskId)
    : null;

  // Find task in user's tasks
  const userTask = user.tasks.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (task: any) => task._id?.toString() === taskObjectId!.toString()
  );

  return (
    <>
      {userTask && (
        <>
          <h1 className="font-black text-2xl mb-3 md:mb-0">Task Details</h1>

          <div className="inline-block relative align-top w-[100%] md:w-[60%]">
            <div className="block text-end">
              <div className="w-[80px] md:w-[80px] p-2 md:mx-3 float-end rounded-lg bg-[var(--green)]">
                <span className="font-bold text-[var(--white)]">Level:</span>
                <span className="font-bold text-[var(--white)] ms-1">
                  {userTask.level}
                </span>
              </div>
            </div>

            <div className="block mb-5">
              <h2 className="text-xl font-bold mt-5 mb-2 md:mt-3 md:mb-3 underline">
                Instruction
              </h2>
              <p className="w-full">{userTask.instruction}</p>
            </div>
          </div>

          <div className="inline-block align-top w-[100%] md:w-[40%] p-5 bg-[var(--gray-01)] ">
            <h2 className="text-xl font-bold underline">Media</h2>
            <div className="grid grid-cols-1">
              <div className="bg">
                {userTask.media?.type === "image" && (
                  <>
                    <Image
                      className="w-full "
                      src={userTask.media!.content || "/img/a.png"}
                      width="100"
                      height="50"
                      alt="task media image"
                    />
                    <a
                      className="flex justify-end"
                      href={userTask.media!.content}
                      download
                    >
                      Download
                    </a>
                  </>
                )}

                {userTask.media?.type === "video" && (
                  <>
                    <video
                      src={userTask.media?.content}
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
                      href={userTask.media.content}
                      download
                    >
                      Download
                    </a>
                  </>
                )}

                {userTask.media?.type === "link" && (
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
                  userTask.media?.type === "link"
                    ? userTask.media!.content
                    : "No link avaliable!"
                }
              />

              <Button
                btnStyle="w-[30%] bg-[var(--green)] disabled:bg-[var(--gray-10)] text-white"
                disabled={userTask.media?.type !== "link"}
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
