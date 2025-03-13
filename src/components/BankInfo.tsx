import React from "react";

export default function BankInfo() {
  return (
    <div className="w-[275px] h-[130px] md:w-[300px] bg-[var(--green)] p-3 shadow-md rounded-lg">
      <p className="font-black text-[14px] text-[var(--white)]">
        Withdral Card
      </p>
      <h2 className="text-[12px] mt-1">ACCESS BANK</h2>
      <h2 className="my-2 text-xl text-[var(--white)] tracking-[20px]">
        123456890
      </h2>
      <p className="tracking-[3px] text-[12px]">AYEBIDUN EZEKIEL</p>
    </div>
  );
}
