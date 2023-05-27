import Hero from "../hero";
import OverLay from "../overlay";
import Form from "./form";

export default function Page() {
  return (
    <>
      <main className="bg-orange-400 text-white md:text-lg w-full h-screen flex flex-col items-center justify-center px-10">
        <Hero h1="ENTER YOUR EMAILID" p="LET'S STAY IN TOUCH" />
        <Form />
        <OverLay currentRoute="/" />
      </main>
    </>
  );
}
