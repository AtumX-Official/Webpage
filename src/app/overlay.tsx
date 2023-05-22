import Image from "next/image";

const OverLay: React.FC = () => {
  return (
    <div className="w-full h-full fixed top-0 flex flex-col justify-between p-3">
      <div className="flex flex-row justify-between">
        <Image
          className="bg-orange-600 px-3 py-2 rounded-full"
          src={"/logo.webp"}
          height={36}
          width={100}
          alt="logo"
        />
        <button>
          <svg
            className="transition ease-in-out delay-150 fill-orange-600 h-full rotate-90 hover:fill-orange-500 hover:rotate-0"
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm2.498 9.995c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm-3.75 0c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm-3.75 0c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25z" />
          </svg>
        </button>
      </div>
      <button className="bg-orange-600 px-6 py-2 rounded-full w-fit self-center font-semibold hover:bg-orange-400">
        REGISTER YOUR INTEREST
      </button>
    </div>
  );
};

export default OverLay;
