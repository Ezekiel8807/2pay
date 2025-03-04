// import Button from "@/components/Button";
// import Image from "next/image";

// type TaskDetailsProbs = {
//   params: Promise<{ taskId: number }>;
// };

// export default async function TaskDetails({ params }: TaskDetailsProbs) {
//   const userId = 1;
//   const { taskId } = await params;

//   //
//   const response = await fetch(
//     `http://localhost:3000/api/users/${userId}/tasks/${taskId}`
//   );
//   const taskInfo = await response.json();
//   //console.log(taskInfo);
//   //

//   return (
//     <>
//       <h1 className="font-black text-3xl mb-3 md:mb-0">Task Details</h1>

//       <div className="flex flex-col md:flex-row justify-between gap-5">
//         <div className="w-[100%] md:w-[60%]">
//           <div className="flex justify-end">
//             <div className="w-[100px] md:w-[200px] bg-[var(--green)]">
//               <div className="flex items-center justify-between px-3">
//                 <span className="font-bold text-white">Paid:</span>
//                 <span>{taskInfo.ispaid}</span>
//               </div>
//               <div className="flex items-center justify-between px-3">
//                 <span className="font-bold text-white">Rank:</span>
//                 <span>{taskInfo.level}</span>
//               </div>
//             </div>
//           </div>

//           <h2 className="text-xl font-bold mt-5 mb-2 md:mt-3 md:mb-3 underline">
//             Instruction
//           </h2>
//           <p className="w-full">{taskInfo.instruction}</p>
//         </div>

//         <div className="w-[100%] md:w-[40%] p-5 bg-[var(--gray-01)]">
//           <h2 className="text-xl font-bold underline">Media</h2>
//           <div className="grid grid-cols-1">
//             <div className="bg">
//               {taskInfo.media.type === "image" && (
//                 <>
//                   <Image
//                     className="w-full "
//                     src={taskInfo.media.file}
//                     width="100"
//                     height="50"
//                     alt="task media image"
//                   />
//                   <a
//                     className="flex justify-end"
//                     href={taskInfo.media.file}
//                     download
//                   >
//                     Download
//                   </a>
//                 </>
//               )}

//               {taskInfo.media.type === "video" && (
//                 <>
//                   <video
//                     src={taskInfo.media.file}
//                     width={100}
//                     height={50}
//                     muted
//                     loop
//                     autoPlay
//                   >
//                     play me
//                   </video>
//                   <a
//                     className="float-end py-1 px-3 bg-[var(--green)] disabled:bg-[var(--gray-10)] text-white"
//                     href={taskInfo.media.file}
//                     download
//                   >
//                     Download
//                   </a>
//                 </>
//               )}

//               {taskInfo.media.type === "link" && (
//                 <div className="w-full h-[100px] my-3 bg-[var(--gray-10)] flex items-center justify-center">
//                   Copy the link below
//                 </div>
//               )}
//             </div>
//           </div>

//           <h2 className="text-xl font-bold mt-5 underline">Link</h2>
//           <div className="flex my-3">
//             <input
//               className="w-[70%] p-1 outline-none"
//               type="text"
//               readOnly
//               value={
//                 taskInfo.media.type === "link"
//                   ? taskInfo.media.file
//                   : "No link avaliable!"
//               }
//             />

//             <Button
//               btnStyle="w-[30%] bg-[var(--green)] disabled:bg-[var(--gray-10)] text-white"
//               disabled={taskInfo.media.type !== "link"}
//             >
//               Copy
//             </Button>
//           </div>
//         </div>
//       </div>

//       <div className="w-[100%] md:w-[60%] mb-10">
//         <h1 className="w-[200px] font-black text-3xl text-center mb-0 p-10 md:p-0 md:mb-5 m-auto">
//           Task Submition
//         </h1>

//         <div className="flex w-[100%] bg-red-500 p-5">
//           <div className="grid grid-cols-2">
//             <div className="w-full"></div>
//             <div className="w-full p-5"></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// .setExpirationTime()
