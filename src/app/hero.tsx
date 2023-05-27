interface props {
  h1: string;
  p: string;
}

const Hero: React.FC<props> = ({ h1, p }) => {
  return (
    <div className="font-monst md:my-10">
      <h1 className="text-5xl font-bold">{h1}</h1>
      <p>{p}</p>
    </div>
  );
};

export default Hero;
