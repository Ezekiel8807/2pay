type FormErrorType = {
  children: React.ReactNode;
};

export default function FormError({ children }: FormErrorType) {
  return (
    <p className="p-3 font-black text-white text-center my-1 text-[10px] bg-red-300">
      {children}
    </p>
  );
}
