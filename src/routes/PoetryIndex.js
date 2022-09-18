import { Link } from "react-router-dom";

const PoetryIndex = () => (
  <nav className="flex flex-col items-center">
    <Link className="block p-2 pl-8" to="/poesia/la-poesia" key={"la-poesia"}>
      La Poesía
    </Link>
    <Link className="block p-2 pl-8" to="/poesia/el-amor" key={"el-amor"}>
      El Amor
    </Link>
  </nav>
);

export default PoetryIndex;
