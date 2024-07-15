import {useRoutes} from "react-router-dom";
import Users from "../pages/Team/Users";
import UserAdd from "../pages/Team/UserAdd";
import UserEdit from "../pages/Team/UserEdit";
import NotFound from "../components/Fragments/NotFound";
import Category from "../pages/Category/Category";

export default function RouteUsers() {
  return useRoutes([
    {path: "/users", element: <Users />},
    {path: "/users/tambah", element: <UserAdd />},
    {path: "/users/update/:id", element: <UserEdit />},
    {path: "/category", element: <Category />},

    {path: "*", element: <NotFound />},
  ]);
}
