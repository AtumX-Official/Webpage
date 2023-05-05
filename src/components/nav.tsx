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
    name: "home",
    route: "/",
  },
  {
    name: "tale",
    route: "/tale",
  },
  {
    name: "team",
    route: "/team",
  },
  {
    name: "tech",
    route: "/tech",
  },
];

const Nav: React.FC<props> = ({ currentRoute }) => {
  return (
    <div className="fixed bottom-8 w-full flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <nav className="rounded-full bg-orange-800">
          <ul className="flex">
            {routes.map((item) => (
              <a
                href={item.route}
                key={item.name}
                className="no-underline"
                rel="prefetch"
              >
                <li
                  className={clsx(
                    "no-underline py-2 px-4 rounded-[6rem] lg:py-4 lg:px-8",
                    item.route === currentRoute && "bg-orange-600"
                  )}
                >
                  {item.name === "home" ? (
                    <>
                      <img src="/logo.webp" className="h-6" alt="atumx logo" />
                    </>
                  ) : (
                    item.name
                  )}
                </li>
              </a>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
