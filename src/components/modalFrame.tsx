type ModalFrameProbs = {
  children: React.ReactNode;
  bgColor?: string;
  closeModal?: () => void;
};

export default function ModalFrame({
  children,
  closeModal,
  bgColor = "bg-[var(--white)]",
}: ModalFrameProbs) {
  return (
    // fixed  bg-opacity-1  hiden
    <div className="fixed z-10 top-0 left-0 w-screen h-screen bg-[var(--black-trans)] bg-opacity-1 flex items-center justify-center backdrop-blur-sm ">
      <div
        className={`relative w-[90%] max-w-[400px] m-auto p-2 rounded ${bgColor}`}
      >
        <div
          onClick={closeModal}
          className="absolute top-3 right-3 w-[30px] h-[30px] rounded-full bg-[var(--green)]"
        >
          X
        </div>
        {children}
      </div>
    </div>
  );
}
