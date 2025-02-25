type FormErrorType = {
  children: React.ReactNode;
};

export default function FormError({ children }: FormErrorType) {
  return <p className="-mt-5 text-red-900 text-[10px]">{children}</p>;
}
