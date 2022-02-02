import { FC, memo } from "react";
import { HeaderWrapper } from "./header.styled";

const HeaderComponent: FC = () => {
  return <HeaderWrapper>Header</HeaderWrapper>;
};

export default memo(HeaderComponent);
