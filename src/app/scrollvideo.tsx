import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface props {
  dir: string;
  max: number;
}

const ScrollVideo: React.FC<props> = ({ dir, max }) => {
  const w = useRef<number>();
  const h = useRef<number>();

  const [scrollValue, setScrollValue] = useState(0);
  const [frameValue, setFrameValue] = useState(1);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollValue(e.target.documentElement.scrollTop);
      setFrameValue(Math.round((max / 100) * (scrollValue / 5000) * 100) + 1);
      console.log("px: " + scrollValue);
      console.log("frame: " + frameValue);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  useEffect(() => {}, []);

  return (
    <div className="min-h-[5000px]">
      <Image
        className="w-full h-full fixed top-0"
        width={1000}
        height={1000}
        src={dir + "/image" + frameValue + ".jpg"}
        alt=""
      />
    </div>
  );
};

export default ScrollVideo;
