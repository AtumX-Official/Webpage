import ScrollVideo from "@/app/scrollvideo";
import OverLay from "./overlay";

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
