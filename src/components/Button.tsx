type ButtonProbs = {
  children: React.ReactNode;
  btnStyle?: string;
  btnAction?: () => void;
};

export default function Button({ children, btnStyle, btnAction }: ButtonProbs) {
  return (
    <button onClick={btnAction} className={btnStyle}>
      {children}
    </button>
  );
}
