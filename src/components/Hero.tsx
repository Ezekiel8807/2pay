import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="w-[500px]">
        <h1 className="font-black text-[45px]">
          Earn on 2pay by performing simple tasks.
        </h1>
        <p className="font-extralight text-sm my-3 text-wrap">
          Earn some naira daily by performing simple social media tasks such as
          posting, liking, commenting and so on.
        </p>

        <button className="font-bold bg-red-700 py-3 px-5 text-white rounded-full">
          Start earning now!!!
        </button>
      </div>
      <Image
        src={"/undraw_savings_re_eq4w.svg"}
        width={500}
        height={500}
        alt="hero image"
      />
    </div>
  );
}
