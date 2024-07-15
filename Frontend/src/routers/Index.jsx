import {useRoutes} from "react-router-dom";
import Branda from "../pages/Informasi/Branda";
import ListCB from "../pages/Informasi/ListCB";
import DetailCB from "../pages/Informasi/DetailCB";
import ListOPK from "../pages/Informasi/ListOPK";
import DetailOPK from "../pages/Informasi/DetailOPK";
import Contact from "../pages/Informasi/Contact";
import Login from "../components/Fragments/Informasi/Login";
//===========================================================================
import Dashboard from "../pages/Dashboard";
import RouteUsers from "./RouteUsers";
import RouteCB from "./RouteCB";
import RouteOPK from "./RouteOPK";
//===========================================================================
import UpdateTradisi from "../pages/Pendataan/OPK/UpdateTradisi";
import UpdateManuskript from "../pages/Pendataan/OPK/UpdateManuskript";
import UpdateAdat from "../pages/Pendataan/OPK/UpdateAdat";
import UpdateRitus from "../pages/Pendataan/OPK/UpdateRitus";
import UpdateSeni from "../pages/Pendataan/OPK/UpdateSeni";
import UpdateBahasa from "../pages/Pendataan/OPK/UpdateBahasa";
import UpdateTeknologi from "../pages/Pendataan/OPK/UpdateTeknologi";
import UpdatePermainan from "../pages/Pendataan/OPK/UpdatePermainan";
//===========================================================================
import NotFound from "../components/Fragments/NotFound";
import UpdatePengetahuan from "../pages/Pendataan/OPK/UpdatePengetahuan";

export default function Index() {
  return useRoutes([
    {path: "/", element: <Branda />},
    {path: "/data-cb", element: <ListCB />},
    {path: "/data-opk", element: <ListOPK />},
    {path: "/contact", element: <Contact />},
    {path: "/user-login", element: <Login />},
    {path: "/data-cb/detail/:id", element: <DetailCB />},
    {path: "/data-opk/detail/:id", element: <DetailOPK />},

    {path: "/dashboard", element: <Dashboard />},
    {path: "/manage/*", element: <RouteUsers />},
    {path: "/pendataan-cb/*", element: <RouteCB />},
    {path: "/pendataan-opk/*", element: <RouteOPK />},
    {path: "/pendataan-opk/1/update/:id", element: <UpdateTradisi />},
    {path: "/pendataan-opk/2/update/:id", element: <UpdateManuskript />},
    {path: "/pendataan-opk/3/update/:id", element: <UpdateAdat />},
    {path: "/pendataan-opk/4/update/:id", element: <UpdateRitus />},
    {path: "/pendataan-opk/5/update/:id", element: <UpdateSeni />},
    {path: "/pendataan-opk/6/update/:id", element: <UpdateBahasa />},
    {path: "/pendataan-opk/7/update/:id", element: <UpdateTeknologi />},
    {path: "/pendataan-opk/8/update/:id", element: <UpdatePermainan />},
    {path: "/pendataan-opk/9/update/:id", element: <UpdatePermainan />},
    {path: "/pendataan-opk/10/update/:id", element: <UpdatePengetahuan />},

    {path: "*", element: <NotFound />},
  ]);
}
