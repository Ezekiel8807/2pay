type PerformanceProbs = {
  Overall: number;
  Completed: number;
};

export default function Performance({ Overall, Completed }: PerformanceProbs) {
  const missed = Overall - Completed || 0;
  const overall = Overall || 0;
  const completed = Completed || 0;

  return (
    <div className="flex flex-row justify-around items-center w-[100%] sm:w-[250px] md:w-[300px] bg-[var(--green)]  p-2 md:p-3 shadow-md rounded-lg">
      <div className="w-[80px] bg-white text-center p-3 rounded-lg">
        <span className="font-black text-[20px]">{overall}</span>
        <p className="text-[10px]">Tasks Overall </p>
      </div>
      <div className="w-[80px] bg-white text-center p-3 rounded-lg">
        <span className="font-black text-[20px] bg-[var(--green) p-2]">
          {completed}
        </span>
        <p className="text-[10px]">Tasks Completed</p>
      </div>
      <div className="w-[80px] bg-white text-center p-3 rounded-lg">
        <span className="font-black text-[20px] bg-[var(--green) p-2]">
          {missed}
        </span>
        <p className="text-[10px]">Tasks Missed</p>
      </div>
    </div>
  );
}
