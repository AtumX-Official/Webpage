import Image from "next/image";
import Menu from "./menu";

const OverLay: React.FC = () => {
  return (
    <div className="w-full h-full fixed top-0 flex flex-col justify-between p-6">
      <div className="flex flex-row justify-between">
        <Image
          className="bg-orange-600 h-fit px-3 py-2 rounded-full"
          src={"/logo.webp"}
          height={36}
          width={100}
          alt="logo"
        />
        <Menu currentRoute="/" />
      </div>
      <button className="bg-orange-600 px-6 py-2 rounded-full w-fit self-center font-semibold hover:bg-orange-400">
        REGISTER YOUR INTEREST
      </button>
    </div>
  );
};

export default OverLay;
