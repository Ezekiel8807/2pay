import Image from "next/image";

// images
import subImage from "../../public/img/d.jpg";
import Button from "./Button";

export default function TaskSubmissionForm() {
  return (
    <div className="flex w-[100%] bg-red-500">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full">
          <Image src={subImage} alt="Task submission image" />
        </div>
        <div className="w-full p-5">
          <div className="flex flex-row justify-end">
            <Button>Image</Button>
            <Button>Video</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
