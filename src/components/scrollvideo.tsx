import heka from "../../public/heka.mp4";

const ScrollVideo = () => {
  return (
    <video className="absolute -z-10 md:w-full" autoPlay loop muted>
      <source src={heka} type="video/mp4" />
    </video>
  );
};

export default ScrollVideo;
