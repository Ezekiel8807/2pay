type MainProbs = {
  children: React.ReactNode;
};

export default function Main({ children }: MainProbs) {
  return (
    <div className="w-[100%] h-screen sm:w-[90%] m-auto overflow-y-scroll no-scrollbar">
      {children}
    </div>
  );
}
