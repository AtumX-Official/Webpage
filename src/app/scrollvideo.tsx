"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Loading from "./loading";

interface props {
  dir: string;
  max: number;
}

const ScrollVideo: React.FC<props> = ({ dir, max }) => {
  const h = useRef<number>();
  const w = useRef<number>();

  const [scrollValue, setScrollValue] = useState(0);
  const [frameNumber, setFrameNumber] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [orientation, setOrientation] = useState<"mobile" | "desktop">(
    "mobile"
  );

  useEffect(() => {
    const onPageLoad = () => {
      setLoaded(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  useEffect(() => {
    h.current = window.innerHeight;
    w.current = window.innerWidth;
    h.current > w.current
      ? setOrientation("mobile")
      : setOrientation("desktop");
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
      // console.log("px: " + scrollValue);
      console.log("frame: " + frameNumber);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  return (
    <>
      {!loaded && <Loading />}
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
