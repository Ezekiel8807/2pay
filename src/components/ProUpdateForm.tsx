//components
import Button from "./Button";

type ProUpdateFormProbs = {
  title: string;
  children: React.ReactNode;
};

export default function ProUpdateForm({ children, title }: ProUpdateFormProbs) {
  return (
    <div className="w-[100%] md:w-[50%] p-5 bg-[var(--gray-01)]">
      <h2 className="font-black text-xl mb-5">{title}</h2>
      <form method="POST">
        {children}

        <Button btnStyle="float-end">Update</Button>
      </form>
    </div>
  );
}
