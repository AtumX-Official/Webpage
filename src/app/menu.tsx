import clsx from "clsx";

interface props {
  currentRoute: string;
}

interface routeType {
  name: string;
  route: string;
}

const routes: routeType[] = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About Us",
    route: "/about-us",
  },
  {
    name: "Careers",
    route: "/careers",
  },
  {
    name: "Updates",
    route: "/updates",
  },
];

const Menu: React.FC<props> = ({ currentRoute }) => {
  return (
    <div className="flex flex-col gap-5 items-end group">
      <button>
        <div className="bg-white w-6 h-6 absolute top-9 right-9"></div>
        <svg
          className="transition ease-in-out delay-150 h-12 fill-orange-600 rotate-90 hover:fill-orange-500 group-hover:rotate-0"
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
      <div className="transition ease-in-out delay-150 flex flex-col gap-3 items-end translate-x-32 group-hover:translate-x-0">
        {routes.map((route) => (
          <a
            href={route.route}
            key={route.name}
            className={clsx(
              "px-3 py-1 rounded-full text-sm w-fit hover:bg-orange-400",
              route.route === currentRoute && "bg-orange-500",
              route.route !== currentRoute && "bg-orange-600"
            )}
          >
            {route.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
