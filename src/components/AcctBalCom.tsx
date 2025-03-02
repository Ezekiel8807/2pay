"use client";
import { useEffect, useState } from "react";

//components
import Button from "./Button";

type AcctBalComProbs = {
  userBalance: number;
};

export default function AcctBalCom({ userBalance }: AcctBalComProbs) {
  const [balance, setBalance] = useState(0);

  //get acct ballance
  useEffect(() => {
    setBalance(userBalance);
  }, [userBalance]);

  return (
    <div className="flex justify-end">
      <div className="w-[100%] sm:w-[250px] md:w-[300px] bg-[var(--gray-10)] p-3 shadow-md">
        <div className="flex justify-between">
          <h3 className="font-black">Balance: </h3>
          <Button btnStyle="font-bold text-[12px] cursor-pointer hover:text-[var(--green)]">
            Withdraw
          </Button>
        </div>
        <h1 className="font-black text-2xl">
          {`${balance}.00`} <span className="text-[var(--green)]">NGN</span>
        </h1>
      </div>
    </div>
  );
}
