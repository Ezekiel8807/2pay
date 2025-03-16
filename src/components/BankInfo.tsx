type BankInfoProbs = {
  BankInfo: {
    acctName: string;
    bankName: string;
    bankAcctNo: number;
  };
};

export default function BankInfo({ BankInfo }: BankInfoProbs) {
  return (
    <div className="w-[275px] h-[130px] md:w-[300px] bg-[var(--green)] p-3 shadow-md rounded-lg">
      <p className="font-black text-[14px] text-[var(--white)]">
        Withdral Card
      </p>
      <h2 className="text-[12px] mt-1">
        {BankInfo.bankName.toUpperCase() || "BANK NAME"}
      </h2>
      <h2 className="my-2 text-xl text-[var(--white)] tracking-[20px]">
        {BankInfo.bankAcctNo || 1234567890}
      </h2>
      <p className="tracking-[3px] text-[12px]">
        {BankInfo.acctName.toUpperCase() || "LASTNAME FIRSTNAME"}
      </p>
    </div>
  );
}
