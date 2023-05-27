import ScrollVideo from "@/app/scrollvideo";
import OverLay from "./overlay";
import Head from "next/head";
import PreFetch from "./prefetch";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <PreFetch path="/mobile" />
        <PreFetch path="/desktop" />
      </Head>
      <main>
        <ScrollVideo dir="" max={123} />
        <OverLay currentRoute="/" />
      </main>
    </>
  );
}
