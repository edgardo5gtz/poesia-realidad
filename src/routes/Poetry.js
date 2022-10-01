import { Outlet } from "react-router-dom";

const Poetry = () => (
  <div className="flex flex-col">
    <div className="mt-10 mb-8 px-36">{<Outlet />}</div>
  </div>
);

export default Poetry;
