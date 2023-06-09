import OverLay from "../overlay";

export default function Home() {
  return (
    <>
      <main className="bg-white font-monst text-black md:text-lg w-full h-full flex flex-col justify-center items-center pt-24 pb-12">
        <div className="font-monst md:my-10">
          <div className="text-7xl md:text-9xl font-bold">
            <h1>WE</h1>
            <h1>BUILD</h1>
            <h1>SOCIAL</h1>
            <h1>ROBOTS</h1>
          </div>
          <p className="md:text-center text-[0.68rem] md:text-base">
            CUZ WELL THAT&apos;S HOW ROBOTS WE&apos;RE SUPPOSED TO BE
          </p>
        </div>
        <br />
        <video className="w-screen" autoPlay loop muted>
          <source src="/heka.mp4" type="video/mp4" />
        </video>
        <br />
        <div className="font-monst text-center md:my-10">
          <h1 className="text-3xl font-bold">HOW OUR ROBOTS ARE BEING USED</h1>
          <br />
          <p className="text-xs opacity-75">
            {"{insert video compilation of kids in workshop using heka}"}
          </p>
          <br />
          <p className="text-[0.65rem] md:text-base">
            1000+ PARENTS HAPPY THIER CHILD ISN&apos;T PHONE ADDICTED
          </p>
          <p className="text-[0.625rem] md:text-base">
            1000+ PARENTS HAPPY THIER CHILD UNDERSTANDS ROBOTICS
          </p>
        </div>
        <OverLay currentRoute="/about-us" />
      </main>
    </>
  );
}
