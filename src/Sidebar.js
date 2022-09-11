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
          "flex flex-col pt-4 transition-appear duration-500 ease-linear",
          {
            "basis-72 overflow-x-auto": showNavBar,
            "basis-0 overflow-x-hidden": !showNavBar,
          }
        )}
      >
        <div className="self-end">
          <button onClick={() => setShowNavbar(false)}>
            <img className="max-h-6" src={CloseIcon} alt="" />
          </button>
        </div>
        <nav className="pt-4">
          <Link className="block p-2 pl-8" to="/prologo">
            Prologo
          </Link>
          <Link className="block p-2 pl-8" to="/bibliografia">
            Bibliografía del autor
          </Link>
          <Link className="block p-2 pl-8" to="/fotografias">
            Fotografias
          </Link>
          <Link className="block p-2 pl-8" to="/poesia">
            Poesia
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
