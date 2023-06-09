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

  function requestFullScreen(element: any) {
    // Supports most browsers and their versions.
    var requestMethod =
      element.requestFullScreen ||
      element.webkitRequestFullScreen ||
      element.mozRequestFullScreen ||
      element.msRequestFullScreen;

    if (requestMethod) {
      requestMethod.call(element);
    }
  }

  useEffect(() => {
    const onPageLoad = async () => {
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

    window.addEventListener("resize", (e: any) => {
      h.current = e.currentTarget.innerHeight;
      w.current = e.currentTarget.innerWidth;
    });
  }, []);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollValue(e.target.documentElement.scrollTop);
      setFrameNumber(
        Math.round(
          max * (scrollValue / e.target.documentElement.scrollHeight)
        ) + 1
      );
      console.log("frame: " + frameNumber);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  return (
    <>
      <Loading
        display={!loaded}
        prefetchDir={"/" + dir + orientation}
        frames={max}
      />
      <div>
        <div className="fixed bottom-20 p-4 z-20 w-full flex flex-col justify-center items-center ">
          <div className="flex flex-col items-center bg-black p-4 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
            <svg
              className="fill-orange-600 animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c3.309 0 6 2.691 6 6v8c0 3.309-2.691 6-6 6s-6-2.691-6-6v-8c0-3.309 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8v8c0 4.418 3.582 8 8 8s8-3.582 8-8v-8c0-4.418-3.582-8-8-8zm0 9c-.829 0-1.5-.672-1.5-1.5s.671-1.5 1.5-1.5 1.5.672 1.5 1.5-.671 1.5-1.5 1.5z" />
            </svg>
            <p className="text-orange-600">scroll down</p>
          </div>
        </div>
        <Image
          className="fixed bottom-0"
          style={{ width: "100vw", height: "100vh" }}
          width={1000}
          height={1000}
          src={dir + "/" + orientation + "/image" + frameNumber + ".jpg"}
          alt="current frame in the video"
          onClick={() => {
            var elem = document.body; // Make the body go full screen.
            requestFullScreen(elem);
          }}
          priority
        />
      </div>
    </>
  );
};

export default ScrollVideo;
