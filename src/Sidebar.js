import { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import MenuIcon from "./img/menu.svg";
import CloseIcon from "./img/close.svg";

const Sidebar = () => {
  const [showNavBar, setShowNavbar] = useState(false);

  return (
    <>
      <div
        className={classnames(
          "absolute h-full pt-4 transition-appear duration-500 ease-linear bg-white sm:bg-transparent",
          {
            "w-full sm:w-52 overflow-x-auto ": showNavBar,
            "w-0 overflow-x-hidden": !showNavBar,
          }
        )}
      >
        <div className="flex justify-end">
          <button onClick={() => setShowNavbar(false)}>
            <img className="max-h-6 mx-2" src={CloseIcon} alt="" />
          </button>
        </div>
        <nav className="pt-4" onClick={() => setShowNavbar(false)}>
          <Link className="block p-2 pl-8" to="/">
            Inicio
          </Link>
          <Link className="block p-2 pl-8" to="/prologo">
            Prólogo
          </Link>
          <Link className="block p-2 pl-8" to="/biografia">
            Biografía
          </Link>
          <Link className="block p-2 pl-8" to="/poesia">
            Poesia
          </Link>
          <Link className="block p-2 pl-8" to="/">
            Acerca
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setShowNavbar(true)}
        className={classnames(
          "max-h-8 absolute top-4 left-4 transition-opacity",
          {
            "opacity-100 duration-1000 ease-in": !showNavBar,
            "opacity-0": showNavBar,
          }
        )}
      >
        <img src={MenuIcon} alt="" />
      </button>
    </>
  );
};

export default Sidebar;
