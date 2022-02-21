import { FC, memo } from "react";
import * as React from "react";
import { useDispatch, connect } from 'react-redux';

import { NewButton } from "@app/common";
import { ColumnsWrapper } from "../columns.styled";
import HeaderComponent, { HeaderType } from "@modules/header";
import { setPopupWindow } from '../../../system/action';
import usePopup from "../../../components/common/popupWindow/popup.hooks";
import ManageColumns from '../manage'

// const mapActionToProps = {
//   openPopup: payload => setPopupWindow(payload)
// }

const ListComponent: FC = () => {
  const newPopus = usePopup()
  const dispatch = useDispatch();
  const onclick = () => {
    // alert("add new click");
    newPopus.setContent(ManageColumns)
    newPopus.show()
  };
  const PopupData: FC = () => {
    return (
      <div>Hello</div>
    )
  }
  const header: HeaderType = {
    title: "Column",
    subTitle: "this is columns sub title",
    actions: <NewButton onClick={() => onclick()} />,
  };

  return (
    <ColumnsWrapper>
      <HeaderComponent {...header}></HeaderComponent>
      This is Component List
    </ColumnsWrapper>
  );
};

export default memo(ListComponent);
