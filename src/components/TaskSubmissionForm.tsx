"use client";
import Image from "next/image";
import { useState } from "react";

// images
import subImage from "../../public/img/d.jpg";
import Button from "./Button";

export default function TaskSubmissionForm() {
  const [file, setFile] = useState();

  function getImage(e: React.ChangeEventHandler<HTMLInputElement>) {
    console.log(e);
  }
  return (
    <div className="flex w-[100%]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full">
          <Image src={subImage} alt="Task submission image" />
        </div>
        <div className="w-full p-5">
          <form action="">
            <p>Upoad an image or video record for your task verification</p>
            <div className="">
              <input
                className="w-full bg-red-500 "
                type="image"
                placeholder="Select an image"
                onChange={getImage}
                required
              />
            </div>

            <Button>Request verification</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
