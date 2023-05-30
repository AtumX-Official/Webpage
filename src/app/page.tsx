import ScrollVideo from "@/app/scrollvideo";
import OverLay from "./overlay";
import Head from "next/head";
import PreFetch from "./prefetch";

export default function Home() {
  return (
    <>
      <main>
        <ScrollVideo dir="" max={123} />
        <OverLay currentRoute="/" />
      </main>
    </>
  );
}
