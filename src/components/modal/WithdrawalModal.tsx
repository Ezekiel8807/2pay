import React from "react";
import ModalFrame from "../modalFrame";

type WithdrawalModalProbs = {
  closeModal: () => void;
};

export default function WithdrawalModal({ closeModal }: WithdrawalModalProbs) {
  return (
    <ModalFrame closeModal={closeModal}>
      <h1 className="font-black text-center text-2xl">Withdraw</h1>

      <form action="">
        <div className="flex flex-col md:flex-row mb-5 md:justify-between">
          <label htmlFor="ammount">Fullname: </label>
          <input
            className="w-full md:w-[70%] outline-none bg-none p-1 border-b-2 text-right"
            type="number"
            name="fullname"
            readOnly
            id="fullname"
            placeholder="Fullname"
          />
        </div>

        <div className="flex flex-col md:flex-row mb-5 md:justify-between">
          <label htmlFor="bankName">Bank Name: </label>
          <input
            className="w-full md:w-[70%] outline-none bg-none p-1 border-b-2 text-right"
            type="text"
            name="bankName"
            readOnly
            id="bankName"
            placeholder="Bank Name"
          />
        </div>
      </form>
    </ModalFrame>
  );
}
