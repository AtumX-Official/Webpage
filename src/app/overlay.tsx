import Image from "next/image";
import Menu from "./menu";

interface props {
  currentRoute: string;
}

const OverLay: React.FC<props> = ({ currentRoute }) => {
  return (
    <div className="z-40 w-full text-white h-full fixed top-0 flex flex-col justify-between p-6">
      <div className="flex flex-row justify-between">
        <a className="h-fit" href="/">
          <Image
            className="bg-orange-600 h-fit px-3 py-2 rounded-full"
            src={"/logo.webp"}
            height={36}
            width={100}
            alt="logo"
          />
        </a>
        <Menu currentRoute={currentRoute} />
      </div>
      <a
        href="/subscribe"
        className="bg-orange-600 px-6 py-2 fixed bottom-10 rounded-full text-xs md:text-base w-fit self-center font-semibold hover:bg-orange-400"
      >
        REGISTER YOUR INTEREST
      </a>
    </div>
  );
};

export default OverLay;
