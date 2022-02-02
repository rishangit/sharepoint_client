import { FC, memo } from "react";
import MainRoutes from "./main.router";
import HeaderComponent from "../header";
import NavigationComponent from "../navigation";
const MainComponent: FC = (props: any) => {
  return (
    <>
      <NavigationComponent />
      <HeaderComponent />
      <MainRoutes />
    </>
  );
};

export default memo(MainComponent);
