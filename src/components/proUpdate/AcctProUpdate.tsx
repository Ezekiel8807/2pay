import ProUpdateForm from "../ProUpdateForm";

type AcctProUpdateProbs = {
  userAcctData: {
    fullname: string;
    bankName: string;
    bankAcctNo: number;
  };
};

export default function AcctProUpdate({ userAcctData }: AcctProUpdateProbs) {
  return (
    <ProUpdateForm title="Account Information">
      <div className="flex flex-col md:flex-row mb-5 md:justify-between">
        <label htmlFor="firstname">Acct Name: </label>
        <input
          className="w-full md:w-[70%] outline-none bg-none p-1 border-b-2 text-right"
          type="text"
          value={userAcctData.fullname}
          readOnly
          name="firstname"
          id="firstname"
        />
      </div>

      <div className="flex flex-col md:flex-row mb-5 md:justify-between">
        <label htmlFor="username">Bank Name: </label>
        <input
          className="w-full md:w-[70%] outline-none bg-none p-1 border-b-2 text-right"
          type="text"
          value={userAcctData.bankName}
          name="username"
          id="username"
        />
      </div>

      <div className="flex flex-col md:flex-row mb-5 md:justify-between">
        <label htmlFor="lastname">Acct NO: </label>
        <input
          className="w-full md:w-[70%] outline-none bg-none p-1 border-b-2 text-right"
          type="text"
          value={userAcctData.bankAcctNo}
          name="lastname"
          id="lastname"
        />
      </div>
    </ProUpdateForm>
  );
}
