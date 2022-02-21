import { memo, FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  NaviWrapper,
  NavigationItem,
  ItemContainer,
} from "./navigation.styled";
import { mainNavigation, MainNavigationItemType } from "./constant";

const NavigationComponent: FC = () => {
  const navigate = useNavigate();

  const onNaviClick = useCallback(
    (url: string) => {
      navigate(url, { replace: true });
    },
    [navigate]
  );

  return (
    <NaviWrapper>
      {mainNavigation().map((navi: MainNavigationItemType) => {
        return (
          <NavigationItem key={navi.url}>
            <ItemContainer  onClick={() => onNaviClick(navi.url)}>
              {navi.text}
            </ItemContainer>
          </NavigationItem>
        );
      })}
    </NaviWrapper>
  );
};

export default memo(NavigationComponent);
