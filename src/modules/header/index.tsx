import { FC, memo } from "react";
import { HeaderWrapper , ActionContainer} from "./header.styled";
import { MainTite } from "@app/common";

export interface HeaderType {
  title: string;
  subTitle?: (string | any);
  actions?: any;
  children?: any;
}

const HeaderComponent: FC<HeaderType> = ({
  children,
  title,
  subTitle,
  actions,
}) => {
  return (
    <HeaderWrapper>
      <div>
        <MainTite>{title}</MainTite>
        <div>{subTitle}</div>
      </div>
      <ActionContainer>{actions}</ActionContainer>
    </HeaderWrapper>
  );
};

export default memo(HeaderComponent);
