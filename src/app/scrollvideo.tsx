"use client";

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
  const [frameNumber, setFrameNumber] = useState(1);

  useEffect(() => {
    w.current = window.innerWidth;
    h.current = window.innerHeight;
  }, []);

  useEffect(() => {
    const onScroll = (e: any) => {
      if (h.current) {
        setScrollValue(e.target.documentElement.scrollTop);
        setFrameNumber(
          Math.round(
            max *
              ((scrollValue + h.current) /
                e.target.documentElement.scrollHeight)
          )
        );
      }
      console.log("px: " + scrollValue);
      console.log("frame: " + frameNumber);
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
        src={dir + "/image" + frameNumber + ".jpg"}
        alt="current frame in the video"
      />
    </div>
  );
};

export default ScrollVideo;
