import "../globals.css";

// compponents
import Header from "@/components/layout/Header";
import DashSideNav from "@/components/layout/DashSideNav";

export default function DashhboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="mx-auto">
          <div className="flex">
            <div className="hidden lg:block w-[100%] md:w-[30%] bg-[var(--gray-01)] border-e-8 border-[var(--white)]">
              <DashSideNav />
            </div>
            <div className="w-[100%] px-5 lg:w-[70%]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
