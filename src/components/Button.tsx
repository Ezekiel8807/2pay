type ButtonProbs = {
  children: React.ReactNode;
  btnStyle: string;
};

export default function Button({ children, btnStyle }: ButtonProbs) {
  return <div className={btnStyle}>{children}</div>;
}
