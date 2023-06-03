import Image from "next/image";

interface props {
  path: string;
  frames: number;
}

const PreFetch: React.FC<props> = ({ path, frames }) => {
  const frameElements = [];

  for (let i = 1; i <= frames; i++) {
    frameElements.push(
      <Image
        key={i}
        height={1000}
        width={1000}
        alt="invisible image"
        className="invisible w-full h-[100px]"
        loading="eager"
        src={path + "/image" + i + ".jpg"}
      />
    );
  }
  return <>{frameElements}</>;
};

export default PreFetch;
