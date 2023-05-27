"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface props {
  dir: string;
  max: number;
}

const ScrollVideo: React.FC<props> = ({ dir, max }) => {
  const loaded: boolean[] = [];

  const h = useRef<number>();
  const w = useRef<number>();

  const [scrollValue, setScrollValue] = useState(0);
  const [frameNumber, setFrameNumber] = useState(1);
  const [orientation, setOrientation] = useState<"mobile" | "desktop">(
    "mobile"
  );

  useEffect(() => {
    h.current = window.innerHeight;
    w.current = window.innerWidth;
    h.current > w.current
      ? setOrientation("mobile")
      : setOrientation("desktop");
  }, []);

  useEffect(() => {
    console.log(orientation);
  }, [orientation]);

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
      // console.log("px: " + scrollValue);
      console.log("frame: " + frameNumber);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  return (
    <>
      <div className="min-h-[7000px]">
        <Image
          className="w-full h-full fixed top-0"
          width={1000}
          height={1000}
          src={dir + "/" + orientation + "/image" + frameNumber + ".jpg"}
          alt="current frame in the video"
          priority
        />
      </div>
    </>
  );
};

export default ScrollVideo;
