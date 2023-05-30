import OverLay from "../overlay";
import Form from "./form";

export default function Page() {
  return (
    <>
      <main className="bg-orange-400 text-white md:text-lg w-full h-screen flex flex-col items-center justify-center px-10">
        <div className="font-monst my-10 md:text-center">
          <h1 className="text-5xl font-bold">ENTER YOUR EMAILID</h1>
          <p>LET&apos;S STAY IN TOUCH</p>
        </div>
        <Form />
        <OverLay currentRoute="/" />
      </main>
    </>
  );
}
