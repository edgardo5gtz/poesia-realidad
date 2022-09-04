import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="basis-72 pt-14">
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
  );
};

export default Sidebar;
