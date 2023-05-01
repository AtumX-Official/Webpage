import ScrollVideo from "./scrollvideo";

const Hero: React.FC = () => {
  return (
    <>
      <main className="h-screen w-full flex flex-col justify-evenly md:justify-center opacity-80 items-center">
        <ScrollVideo />
        <h1 className="text-3xl md:text-7xl font-titan-one text-white">
          They Said
          <span className="text-orange-500"> Robots</span>
          <br />
          Can't Show
          <span className="text-orange-500"> Emotions</span>
        </h1>
        <p className="text-xs md:text-lg font-comfortaa m-8 tracking-widest md:tracking-[0.9rem]">
          myth busting...
          <span className="text-orange-500">soon</span>
        </p>
      </main>
    </>
  );
};

export default Hero;
