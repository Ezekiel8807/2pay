type FormErrorProbs = {
  children: React.ReactNode;
};

export default function FormError({ children }: FormErrorProbs) {
  return (
    <div className="text-white text-center mt-2 mb-1 p-2 bg-red-600">
      {children}
    </div>
  );
}
