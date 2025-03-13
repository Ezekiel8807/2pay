import Image from "next/image";
import React from "react";

export default function Transaction() {
  return (
    <>
      <h1 className="font-black text-[30px]">Transaction</h1>
      <p>Transaction history right here.</p>

      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-row justify-start">
          <Image
            src="/public/img/e.svg"
            className="bg-[var(--gray-05)]"
            width="100"
            height="100"
            alt="transaction icon"
          />
          <div>
            <p>eri7w94ie0d83ehd8ccecius8cew</p>
            <p>2/4/2025 7:15pm</p>
          </div>
        </div>
        <div>
          <p>-#5000</p>
          <span>sent</span>
        </div>
      </div>
    </>
  );
}
