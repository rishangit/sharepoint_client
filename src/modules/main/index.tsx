import { FC, memo } from "react";
import { useSelector, RootStateOrAny } from 'react-redux';
import MainRoutes from "./main.router";
import HeaderComponent from "../header";
import NavigationComponent from "../navigation";
import { MainWrapper } from "./main.styled";
import { PopupWindow } from '../../components/common'

const MainComponent: FC = (props: any) => {
  

  return (
    <>
      <NavigationComponent />
      <PopupWindow/>
      {/* <HeaderComponent /> */}
      <MainWrapper>
        <MainRoutes />
      </MainWrapper>
    </>
  );
};

export default memo(MainComponent);
