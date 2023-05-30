import PreFetch from "./prefetch";

interface props {
  prefetchDir: string;
  display: boolean;
  frames: number;
}
const Loading: React.FC<props> = ({ prefetchDir, display, frames }) => {
  return (
    <>
      <div
        style={{ display: display ? "flex" : "none" }}
        className="h-full w-full bg-black flex flex-col justify-center fixed top-0 z-30"
      >
        <video className="-z-10 w-full" autoPlay loop muted>
          <source src="/atumx.mp4" type="video/mp4" />
        </video>
        <br />
        <h1 className="z-30 text-white font-mono text-center">loading...</h1>
      </div>
      <PreFetch path={prefetchDir} frames={frames} />
    </>
  );
};

export default Loading;
