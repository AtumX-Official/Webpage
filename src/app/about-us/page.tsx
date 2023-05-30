import OverLay from "../overlay";

export default function Home() {
  return (
    <>
      <main className="bg-white font-monst text-black md:text-lg w-full h-full flex flex-col justify-center items-center pt-24 pb-12 px-10">
        <div className="font-monst md:my-10">
          <h1 className="text-7xl md:text-5xl font-bold">
            WE BUILD SOCIAL ROBOTS
          </h1>
          <p className="md:text-center text-[0.68rem] md:text-base">
            CUZ WELL THAT&apos;S HOW ROBOTS WE&apos;RE SUPPOSED TO BE
          </p>
        </div>
        <br />
        <p className="text-xs opacity-75">
          {"{insert video compilation of eva, wall-e, baymax, etc}"}
        </p>
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
            100+ PARENTS HAPPY THIER CHILD UNDERSTANDS ROBOTICS
          </p>
        </div>
        <OverLay currentRoute="/about-us" />
      </main>
    </>
  );
}
