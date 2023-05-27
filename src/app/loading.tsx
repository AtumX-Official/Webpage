const Loading: React.FC = () => {
  return (
    <div className="h-full w-full bg-black flex flex-col justify-center absolute z-30">
      <video className="-z-10 w-full" autoPlay loop muted>
        <source src="/atumx.mp4" type="video/mp4" />
      </video>
      <br />
      <h1 className="z-30 text-white font-mono text-center">loading...</h1>
    </div>
  );
};

export default Loading;
