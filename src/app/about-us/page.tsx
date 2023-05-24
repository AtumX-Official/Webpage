import OverLay from "../overlay";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-orange-400 w-full h-full flex flex-col justify-center items-center pt-24 pb-12">
        <h1 className="text-8xl">Hi! 👋</h1>
        <h2 className="text-justify m-9">
          we at AtumX, are a dynamic and youthful team of highly passionate
          individuals who share a common love for robotics tackling a pressing
          and real-world problem head-on.
        </h2>
        <Image
          src="/problems.png"
          alt="phone adiction"
          className="w-full"
          width={1000}
          height={300}
        />
        <h2 className="text-justify m-9">
          coming from the age of lego and mechanix where we experienced the joys
          of being able to bring our imaginations to life.
        </h2>
        <Image
          src="/mechanix.jpeg"
          alt="building"
          className="w-full"
          width={1000}
          height={300}
        />
        <h2 className="text-justify m-9">
          We find ourselves disapointed in today, where video games triumph over
          all other forms of entertainment.
        </h2>
        <OverLay currentRoute="/about-us" />
      </main>
    </>
  );
}
