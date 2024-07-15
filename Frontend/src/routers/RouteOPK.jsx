import {useRoutes} from "react-router-dom";
import ListOPK from "../pages/Pendataan/OPK/ListOPK";
import TambahOPK from "../pages/Pendataan/OPK/TambahOPK";
import UpdateOPK from "../pages/Pendataan/OPK/UpdateOPK";
import DetailOPK from "../pages/Pendataan/OPK/DetailOPK";
import NotFound from "../components/Fragments/NotFound";

export default function RouteOPK() {
  return useRoutes([
    {path: "/:id", element: <ListOPK />},
    {path: "/:id/tambah", element: <TambahOPK />},
    {path: "/:id/update/:id", element: <UpdateOPK />},
    {path: "/:id/detail/:id", element: <DetailOPK />},
    {path: "*", element: <NotFound />},
  ]);
}
