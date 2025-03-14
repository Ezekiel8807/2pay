"use client";
import Button from "./Button";

type AcctBalComProps = {
  firstName: string;
  lastName: string;
  userRank: number;
  userBalance: number;
};

export default function AcctBalCom({
  firstName,
  lastName,
  userRank,
  userBalance,
}: AcctBalComProps) {
  const balance = Number(userBalance) || 0; // Ensure valid number

  return (
    <div className="w-[100%] h-[130px] md:w-[300px] bg-[var(--gray-10)] p-3 shadow-md rounded-lg">
      <div className="flex justify-between items-center">
        {firstName != "" || lastName != "" ? (
          <h3 className="font-bold text-[14px]">{`${lastName} ${firstName}`}</h3>
        ) : (
          <h3 className="font-bold text-[14px]">How’re you doing today?</h3>
        )}

        <div className="rounded-lg  text-[10px] bg-[var(--white)]">
          <span className="font-bold p-2 ">Rank: {userRank}</span>
        </div>
      </div>
      <div className="text-left">
        <h4 className="text-[14px]">Balance:</h4>
        <h5 className="font-black text-lg my-1">
          {`${balance.toFixed(2)}`}
          <span className="ms-1 text-[var(--green)]">NGN</span>
        </h5>
      </div>
      <div className="flex justify-end items-center">
        <Button btnStyle="font-bold text-[12px] mx-2 px-2 py-1 cursor-pointer text-[var(--white)] bg-[var(--green)] rounded-lg">
          Deposit
        </Button>
        <Button btnStyle="font-bold text-[12px] cursor-pointer hover:text-[var(--green)]">
          Withdraw
        </Button>
      </div>
    </div>
  );
}
