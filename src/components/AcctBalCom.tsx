"use client";
import Button from "./Button";

type AcctBalComProps = {
  userBalance: number;
};

export default function AcctBalCom({ userBalance }: AcctBalComProps) {
  const balance = Number(userBalance) || 0; // Ensure valid number

  return (
    <div className="flex justify-end">
      <div className="w-[100%] sm:w-[250px] md:w-[300px] bg-[var(--gray-10)] p-3 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-black">Balance:</h3>
          <Button btnStyle="font-bold text-[12px] cursor-pointer hover:text-[var(--green)]">
            Withdraw
          </Button>
        </div>
        <div className="text-left">
          <h1 className="font-black text-2xl">
            {`${balance.toFixed(2)}`}
            <span className="ms-1 text-[var(--green)]">NGN</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
