import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[] | string | string[];
  buttonStyles?: string;
  routes: {
    href: string;
    title: string;
  }[];
}

const Dropdown: React.FC<Props> = ({ children, routes, buttonStyles }) => {
  console.log(routes);
  return (
    <div className="group inline ">
      <button className={buttonStyles}>
        <span className="pr-1 font-semibold flex-1">{children}</span>
        <span>
          <svg
            className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </button>
      <ul
        className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top w-full  sm:w-36"
      >
        {routes.map((route) => (
          <li
            key={route.title}
            className="rounded-sm px-3 py-1 border-color-pink-700 hover:bg-gray-100"
          >
            <a
              href={route.href}
              className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
            >
              {route.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
