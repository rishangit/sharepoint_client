import { useRoutes } from "react-router-dom";

import ColumnComponent from "@modules/columns";
import WelcomeComponent from "@modules/Welcome";
import GroupComponent from "@modules/groups";
import ContentTpyesComponent from "@modules/contentTypes";
import TablesListComponent from "@modules/tables";

import ColumnRoutes from "@modules/columns/columns.route";
import TablesRoutes from "@modules/tables/tables.route";
import GroupsRoutes from "@modules/groups/groups.route";
import ContentTypesRoutes from "@modules/contentTypes/contentTypes.route";

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
      path: AppRoutingPath.CONTENT_TYPE,
      element: <ContentTpyesComponent />,
      children: ContentTypesRoutes(),
    },
    {
      path: AppRoutingPath.TABLES,
      element: <TablesListComponent />,
      children: TablesRoutes(),
    },
    {
      path: AppRoutingPath.HOME,
      element: <WelcomeComponent />,
    },
  ]);
  return routes;
};

export default MainRoutes;
