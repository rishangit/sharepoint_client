import { FC, memo, useEffect } from "react";
import { useSelector, RootStateOrAny } from 'react-redux';
import MainRoutes from "./main.router";
import HeaderComponent from "../header";
import NavigationComponent from "../navigation";
import { MainWrapper } from "./main.styled";
import { useDispatch } from "react-redux";

const MainComponent: FC = (props: any) => {
  const dispatch = useDispatch()
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
