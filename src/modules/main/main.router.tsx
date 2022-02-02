import ColumnComponent from "@modules/columns";
import ColumnRoutes from "@modules/columns/columns.route";
import { useRoutes } from "react-router-dom";

const MainRoutes = () => {
  const routes = useRoutes([
    {
      path: "columns",
      element: <ColumnComponent />,
      children: ColumnRoutes(),
    },
  ]);
  return routes;
};

export default MainRoutes;
