import { FC, memo, useState } from "react";
import { NewButton,PopupWindow } from "@app/common";
import { ColumnsWrapper } from "../columns.styled";
import HeaderComponent, { HeaderType } from "@modules/header";
import ManageColumns from "../manage";

const ListComponent: FC = () => {
  const [showManage, setShowManage] = useState(false);
  const onclick = () => {
    setShowManage(true);
  };

  const header: HeaderType = {
    title: "Column",
    subTitle: "this is columns sub title",
    actions: <NewButton onClick={() => onclick()} />,
  };

  return (
    <ColumnsWrapper>
      <HeaderComponent {...header}></HeaderComponent>
      {showManage && (
        <>
          <PopupWindow onClose={()=>setShowManage(false)} title = {'Add Column'}>
            <ManageColumns />
          </PopupWindow>
        </>
      )}
    </ColumnsWrapper>
  );
};

export default memo(ListComponent);
