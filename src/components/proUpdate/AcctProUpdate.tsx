"use client";
import { useState } from "react";
import ProUpdateForm from "../ProUpdateForm";

type AcctProUpdateProbs = {
  userAcctData: {
    fullname: string;
    bankName: string;
    bankAcctNo: number;
  };
};

export default function AcctProUpdate({ userAcctData }: AcctProUpdateProbs) {
  const [bankName, setBankName] = useState(userAcctData.bankName);
  const [bankAcctNo, setBankAcctNo] = useState(userAcctData.bankAcctNo);
  return (
    <ProUpdateForm title="Account Information">
      <div className="flex flex-col md:flex-row mb-5 md:justify-between">
        <label htmlFor="acctName">Acct Name: </label>
        <input
          className="w-full md:w-[70%] outline-none bg-none p-1 border-b-2 text-right"
          type="text"
          value={userAcctData.fullname}
          readOnly
          name="acctName"
          id="acctName"
        />
      </div>

      <div className="flex flex-col md:flex-row mb-5 md:justify-between">
        <label htmlFor="bankName">Bank Name: </label>
        <input
          className="w-full md:w-[70%] outline-none bg-none p-1 border-b-2 text-right"
          type="text"
          value={bankName}
          name="bankName"
          id="bankName"
          onChange={(e) => setBankName(e.target.value)}
        />
      </div>

      <div className="flex flex-col md:flex-row mb-5 md:justify-between">
        <label htmlFor="bankAcctNo">Acct NO: </label>
        <input
          className="w-full md:w-[70%] outline-none bg-none p-1 border-b-2 text-right"
          type="number"
          value={bankAcctNo}
          name="bankAcctNo"
          id="bankAcctNo"
          maxLength={10}
          onChange={(e) => setBankAcctNo(+e.target.value)}
        />
      </div>
    </ProUpdateForm>
  );
}
