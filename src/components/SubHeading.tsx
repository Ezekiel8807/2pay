import React from "react";

type SubHeadingPProbs = {
  title: string;
  desc: string;
};

export default function SubHeading({ title, desc }: SubHeadingPProbs) {
  return (
    <>
      <h1 className="font-black text-[20px]">{title}</h1>
      <p className="text-[12px]">{desc}</p>
    </>
  );
}
