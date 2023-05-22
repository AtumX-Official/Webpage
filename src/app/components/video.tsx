interface props {
  src: string;
}

const Video: React.FC<props> = ({ src }) => {
  return (
    <video className="-z-10 md:w-full" autoPlay loop muted>
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
