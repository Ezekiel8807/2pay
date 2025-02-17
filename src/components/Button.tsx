"use client";
import { useRouter } from "next/navigation";

type ButtonProbs = {
  children: React.ReactNode;
  btnStyle: string;
};

export default function Button({ children, btnStyle }: ButtonProbs) {
  const navigate = useRouter();

  const isLogIn = () => {
    navigate.push("/dashboard");
  };

  return (
    <button onClick={isLogIn} className={btnStyle}>
      {children}
    </button>
  );
}
