import AddTableListComponent from './table';
import { AppRoutingPath } from '@app/const';


const TablesRoutes = () => {
  const routes = [
    {
      path:AppRoutingPath.COLUMN_LIST,
      element: <AddTableListComponent />,
    }
  ];
  return routes;
};

export default TablesRoutes;
