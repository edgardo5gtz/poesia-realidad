import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "./img/menu.svg";
import CloseIcon from "./img/close.svg";

const Sidebar = () => {
  const [showNavBar, setShowNavbar] = useState(false);

  return (
    <>
      {showNavBar ? (
        <div className="flex flex-col pt-4">
          <div className="self-end">
            <button onClick={() => setShowNavbar(false)}>
              <img className="max-h-6" src={CloseIcon} alt="" />
            </button>
          </div>
          <nav className="basis-72 pt-4">
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
      ) : (
        <button onClick={() => setShowNavbar(true)}>
          <img
            className="max-h-8 absolute top-4 left-4"
            src={MenuIcon}
            alt=""
          />
        </button>
      )}
    </>
  );
};

export default Sidebar;
