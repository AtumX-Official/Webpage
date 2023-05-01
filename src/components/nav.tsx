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
    name: "milestones",
    route: "/milestones",
  },
  {
    name: "innovation",
    route: "/innovation",
  },
  {
    name: "team",
    route: "/team",
  },
];

const Nav: React.FC<props> = ({ currentRoute }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center justify-center absolute bottom-8">
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
                  {item.name}
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
