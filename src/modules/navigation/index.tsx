import { memo, FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  NaviWrapper,
  NavigationItem,
  ItemContainer,
} from "./navigation.styled";
import { mainNavigation, MainNavigationItemType } from "./constant";
import { setNavigation } from "@sys/action";
import { rootState } from "@sys/types";
import { useDispatch, useSelector } from "react-redux";

const NavigationComponent: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { navigation:{selectedId}} = useSelector((state: rootState) => state.systemReducer);
  console.log("selectedId", selectedId);
  const onNaviClick = useCallback(
    ({ url, id }: any) => {
      navigate(url, { replace: true });
      dispatch(setNavigation(id));
    },
    [navigate]
  );

  return (
    <NaviWrapper>
      {mainNavigation().map((navi: MainNavigationItemType) => {
        return (
          <NavigationItem key={navi.url} seleced = {selectedId === navi.id ? true :undefined} >
            <ItemContainer onClick={() => onNaviClick(navi)}>
              {navi.text}
            </ItemContainer>
          </NavigationItem>
        );
      })}
    </NaviWrapper>
  );
};

export default memo(NavigationComponent);
