import {useRoutes} from "react-router-dom";
import ListCB from "../pages/Pendataan/CB/ListCB";
import TambahCB from "../pages/Pendataan/CB/TambahCB";
import UpdateCB from "../pages/Pendataan/CB/UpdateCB";
import DetailCB from "../pages/Pendataan/CB/DetailCB";
import NotFound from "../components/Fragments/NotFound";

export default function RouteCB() {
  return useRoutes([
    {path: "/:id", element: <ListCB />},
    {path: "/:id/tambah", element: <TambahCB />},
    {path: "/:id/update/:id", element: <UpdateCB />},
    {path: "/:id/detail/:id", element: <DetailCB />},
    {path: "*", element: <NotFound />},
  ]);
}
