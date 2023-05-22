import ScrollVideo from "@/app/scrollvideo";
import OverLay from "./overlay";

export default function Home() {
  return (
    <main>
      <ScrollVideo dir="/desktop" max={25} />
      <OverLay />
    </main>
  );
}
