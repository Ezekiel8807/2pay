import DashSideNav from "@/components/DashSideNav";

export default function DashhboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto">
      <div className="flex">
        <div className="hidden lg:block w-[100%] md:w-[30%] bg-[var(--gray-01)] border-e-8 border-[var(--white)]">
          <DashSideNav />
        </div>
        <div className="w-[100%] px-5 lg:w-[70%]">{children}</div>
      </div>
    </div>
  );
}
