export default function Task() {
  return (
    <div className="relative w-[200px] h-[200px] bg-[var(--green)] rounded-lg">
      <div className="flex justify-end p-2">
        <div className="w-[40px] h-[40px] rounded-full bg-[] items-center text-center">
          FA
        </div>
        <div className="absolute font-black p-1 w-[60px] text-center left-5 bottom-5 bg-[var(--white)] rounded-lg">
          #500
        </div>
      </div>
    </div>
  );
}
