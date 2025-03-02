"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type NavProfileProbs = {
  userName: string;
  userRank: number;
};

export default function NavProfile({ userName, userRank }: NavProfileProbs) {
  const [username, setUsername] = useState("username");
  const [userrank, setUserrank] = useState(1);

  useEffect(() => {
    if (userName && userRank) {
      setUsername(userName);
      setUserrank(userRank);
    }
  }, [userName, userRank]);

  return (
    <div className=" w-[160px] flex flex-end">
      <div className="grid grid-cols-1 sm:grid-cols-2  items-center gap-2">
        <div className="hidden sm:block">
          <Image
            src={"/icons/user-139.svg"}
            width={40}
            height={40}
            className="float-end"
            alt="nav profile photo link"
          />
        </div>
        <div className="hidden sm:block">
          <h3 className="font-black -mb-2 text-[15px]">{username}</h3>
          <span className="font-black -mt-2 text-[10px]">{`Rank: ${userrank}`}</span>
        </div>
      </div>
    </div>
  );
}
