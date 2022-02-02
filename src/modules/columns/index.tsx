import { memo } from "react";
import ColumnRoutes from "./columns.route";
import { Outlet } from "react-router-dom";

const ColumnComponent = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default memo(ColumnComponent);
