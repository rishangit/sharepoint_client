import { FC } from "react";
import ManageColumns from './manage';
import ListComponent from './list';

const ColumnRoutes = () => {
  const routes = [
    {
      path: "new",
      element: <ManageColumns />,
    },
    {
      path: "edit",
      element: <ManageColumns />,
    },
    {
      path: "list",
      element: <ListComponent />,
    },
  ];
  return routes;
};

export default ColumnRoutes;
