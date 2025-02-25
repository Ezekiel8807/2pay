type ButtonProbs = {
  children: React.ReactNode;
  btnStyle?: string;
  disabled?: boolean;
  btnAction?: () => void;
};

export default function Button({
  children,
  btnStyle,
  disabled,
  btnAction,
}: ButtonProbs) {
  return (
    <button
      type="submit"
      onClick={btnAction}
      className={btnStyle}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
