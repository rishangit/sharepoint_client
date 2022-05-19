import ManageColumns from './manage';
import ListComponent from './list';
import { AppRoutingPath } from "@app/const";

const ColumnRoutes = () => {
  const routes = [
    {
      path: AppRoutingPath.COLUMNS_NEW,
      element: <ManageColumns />,
    },
    {
      path:AppRoutingPath.COLUMNS_LIST,
      element: <ListComponent />,
    }
  ];
  return routes;
};

export default ColumnRoutes;
