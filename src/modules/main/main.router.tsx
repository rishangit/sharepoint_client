import { useRoutes } from "react-router-dom";

import ColumnComponent from "@modules/columns";
import GroupComponent from "@modules/groups";
import ColumnRoutes from "@modules/columns/columns.route";
import GroupsRoutes from "@modules/groups/groups.route";
import WelcomeComponent from "@modules/Welcome";
import { AppRoutingPath } from "@app/const";


const MainRoutes = () => {
  const routes = useRoutes([
    {
      path: AppRoutingPath.COLUMNS,
      element: <ColumnComponent />,
      children: ColumnRoutes(),
    },
    {
      path: AppRoutingPath.GROUPS,
      element: <GroupComponent />,
      children: GroupsRoutes(),
    },
    {
      path: AppRoutingPath.HOME,
      element: <WelcomeComponent />,
    },
  ]);
  return routes;
};

export default MainRoutes;
