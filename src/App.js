import { Link, Outlet } from "react-router-dom";
import Title from "./routes/Title";

const App = () => (
  <>
    <nav className="fixed h-full z-1 top-0 left-0 pt-14">
      <Link className="block p-2 pl-8" to="/prologo">
        Prólogo
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
    <Title />
    <div className="container mx-auto">
      <Outlet />
    </div>
  </>
);

export default App;
