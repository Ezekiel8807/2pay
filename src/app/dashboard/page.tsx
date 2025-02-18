import Button from "@/components/Button";
import Link from "next/link";

const deskLinks = ["Dashboard", "Account", "Transactions", "Logout"];

export default function Dashboard() {
  return (
    <div className="bg-[var(--gray-01)]">
      <div className="flex">
        <div className="hidden lg:block w-[100%] md:w-[30%] border-e-8 border-[var(--white)]">
          <div className="w-[250px] bg-[var(--green)] p-5 my-5 md:my-10 rounded mx-auto shadow-md">
            <div className="w-[100px] h-[100px] bg-[var(--blue-dark)] shadow-md rounded-full m-auto"></div>
            <div className="text-center">
              <span className="font-black mt-2 block text-[var(--white)]">
                Type: Brass
              </span>
              <h1 className="font-black text-[30px]">Ezekiel8807</h1>
            </div>

            <nav className="">
              {deskLinks.map((link) => (
                <Link
                  className="font-black block p-3 hover:text-[var(--white)]"
                  key={link}
                  href={`/${link.toLowerCase()}`}
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="w-[100%] lg:w-[70%] p-5 md:p-10">
          <div className="flex justify-end">
            <div className="w-[100%] sm:w-[250px] md:w-[300px] bg-[var(--gray-10)] p-3 shadow-md">
              <div className="flex justify-between">
                <h3 className="font-black">Balance: </h3>
                <Button btnStyle="font-bold text-[12px] cursor-pointer hover:text-[var(--green)]">
                  Withdraw
                </Button>
              </div>
              <h1 className="font-black text-2xl">
                0.00 <span className="text-[var(--green)]">NGN</span>
              </h1>
            </div>
          </div>

          <div className="">
            <h1 className="font-black text-[30px] mt-5">Tasks</h1>
            <p>Earn real cash for completing task.</p>

            <div className="bg-white h-[250px] p-5 my-5 rounded">
              <div className="mx-auto grid grid-flow-col gap-5 overflow-x-scroll no-scrollbar">
                <div className="relative w-[200px] h-[200px] bg-[var(--white)] shadow-md rounded-lg">
                  <div className="flex justify-end p-2">
                    <div className="w-[40px] h-[40px] rounded-full bg-[] items-center text-center">
                      FA
                    </div>
                    <div className="absolute font-black p-1 w-[60px] text-center left-5 bottom-5 bg-[var(--green)] rounded-lg">
                      #500
                    </div>
                  </div>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
