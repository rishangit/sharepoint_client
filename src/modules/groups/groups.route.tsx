import GroupListComponent from './group';
import { AppRoutingPath } from "@app/const";

const GroupsRoutes = () => {
  const routes = [
    {
      path:AppRoutingPath.GROUPS_LIST,
      element: <GroupListComponent />,
    }
  ];
  return routes;
};

export default GroupsRoutes;