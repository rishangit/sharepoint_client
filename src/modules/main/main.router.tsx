import ColumnComponent from "@modules/columns";
import ColumnRoutes from "@modules/columns/columns.route";
import WelcomeComponent from "@modules/Welcome";
import { AppRoutingPath } from "@app/const";
import { useRoutes } from "react-router-dom";

const MainRoutes = () => {
  const routes = useRoutes([
    {
      path: AppRoutingPath.COLUMNS,
      element: <ColumnComponent />,
      children: ColumnRoutes(),
    },
    {
      path: AppRoutingPath.HOME,
      element: <WelcomeComponent />,
    },
  ]);
  return routes;
};

export default MainRoutes;
