import { FC, memo } from "react";
import { NewButton } from "@app/common";
import { ColumnsWrapper } from "../columns.styled";
import HeaderComponent, { HeaderType } from "@modules/header";

const ListComponent: FC = () => {
  const onclick = () => {
    alert("add new click");
  };

  const header: HeaderType = {
    title: "Column",
    subTitle: "this is columns sub title",
    actions:  <NewButton onClick={() => onclick()} />,
  };

  return (
    <ColumnsWrapper>
      <HeaderComponent {...header}></HeaderComponent>
      This is Component List
    </ColumnsWrapper>
  );
};

export default memo(ListComponent);
