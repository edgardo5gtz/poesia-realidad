import { Outlet } from "react-router-dom";
import Page from "../Page";

const Poetry = () => <Page title={""} content={<Outlet />} />;

export default Poetry;
