import PropTypes from "prop-types";
import { Link } from "react-scroll";
export const MenuMobile = ({ menuMobile, setMenuMobile }) => {
  const closeMenu = () => {
    setMenuMobile(false);
  };
  return (
    <div
      className={`md:hidden fixed w-full h-screen bg-blue-600 transform transition-transform ease-in-out duration-300 z-10 ${
        menuMobile ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div>
        <ul className="flex flex-col gap-y-3 pt-10 px-4 text-sm font-normal text-white">
          <Link
            activeClass="bg-blue-700 text-white"
            smooth
            spy
            to="home"
            onClick={closeMenu}
          >
            <li className="hover:bg-blue-700 hover:text-white cursor-pointer p-3 rounded-md transition duration-500 ease-in-out">
              Home
            </li>
          </Link>
          <Link
            activeClass="bg-blue-700 text-white"
            smooth
            onClick={closeMenu}
            spy
            to="about"
          >
            <li className="hover:bg-blue-700 hover:text-white cursor-pointer p-3 rounded-md transition duration-500 ease-in-out">
              About
            </li>
          </Link>
          <Link
            activeClass="bg-blue-700 text-white"
            smooth
            onClick={closeMenu}
            spy
            to="service"
          >
            <li className="hover:bg-blue-700 hover:text-white cursor-pointer p-3 rounded-md transition duration-500 ease-in-out">
              Service
            </li>
          </Link>
          <Link
            activeClass="bg-blue-700 text-white"
            smooth
            onClick={closeMenu}
            spy
            to="client"
          >
            <li className="hover:bg-blue-700 hover:text-white cursor-pointer p-3 rounded-md transition duration-500 ease-in-out">
              Client
            </li>
          </Link>
          <Link
            activeClass="bg-blue-700 text-white"
            onClick={closeMenu}
            smooth
            spy
            to="contact"
          >
            <li className="hover:bg-blue-700 hover:text-white cursor-pointer p-3 rounded-md transition duration-500 ease-in-out">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

MenuMobile.propTypes = {
  menuMobile: PropTypes.bool.isRequired,
  setMenuMobile: PropTypes.func.isRequired,
};

export const MenuDekstop = () => {
  return (
    <div className="hidden md:block z-10">
      <ul className="flex gap-x-5 text-sm font-normal text-blue-900 text-md">
        <li className="hover:bg-blue-900 hover:text-white p-2 rounded-md transition duration-500 ease-in-out font-semibold">
          <Link activeClass="" smooth spy to="home">
            Home
          </Link>
        </li>
        <li className="hover:bg-blue-900 hover:text-white p-2 rounded-md transition duration-500 ease-in-out font-semibold">
          <Link activeClass="" smooth spy to="about">
            About
          </Link>
        </li>
        <li className="hover:bg-blue-900 hover:text-white p-2 rounded-md transition duration-500 ease-in-out font-semibold">
          <Link activeClass="" smooth spy to="service">
            Service
          </Link>
        </li>
        <li className="hover:bg-blue-900 hover:text-white p-2 rounded-md transition duration-500 ease-in-out font-semibold">
          <Link activeClass="" smooth spy to="client">
            Client
          </Link>
        </li>
        <li className="hover:bg-blue-900 hover:text-white p-2 rounded-md transition duration-500 ease-in-out font-semibold">
          <Link activeClass="" smooth spy to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
