import Button from "./Button";

type AuthFormProbs = {
  children: React.ReactNode;
  title: string;
  formBtnValue: string;
};

export default function AuthForm({
  children,
  title,
  formBtnValue,
}: AuthFormProbs) {
  return (
    <div className="fixed inset-0 bg-opacity-1 backdrop-blur-sm flex items-center justify-center hiden">
      <div className="p-3 w-[90%] max-w-[400px] mx-auto rounded-lg shadow-xl">
        <div className="flex items-center justify-between">
          <h1 className="font-black text-3xl text-[var(--green)]">{title}</h1>
          <span className="w-[20px] h-[20px] p-1 cursor-pointer font-black text-[var(--white)] text-[10px] bg-[var(--green)] text-center rounded-full">
            X
          </span>
        </div>
        <form action="">
          {children}

          <Button btnStyle="font-black float-right px-10 py-2 bg-[var(--green)] text-[var(--white)] rounded">
            {formBtnValue}
          </Button>
        </form>
      </div>
    </div>
  );
}
