import { FC, memo } from "react";
import MainRoutes from "./main.router";
import HeaderComponent from "../header";
import NavigationComponent from "../navigation";
import { MainWrapper } from "./main.styled";
const MainComponent: FC = (props: any) => {
  return (
    <>
      <NavigationComponent />
      {/* <HeaderComponent /> */}
      <MainWrapper>
        <MainRoutes />
      </MainWrapper>
    </>
  );
};

export default memo(MainComponent);
