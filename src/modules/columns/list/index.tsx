import { FC, memo, useState } from "react";
import { useSelector } from "react-redux";

import { NewButton, PopupWindow } from "@app/common";
import * as SC from "../columns.styled";
import HeaderComponent, { HeaderType } from "@modules/header";
import ManageColumns from "../manage";
import { ColumnIcon } from "@modules/columns/common/column.icons";
import { IconDelete , IconEdit } from "@app/icons";


const ListComponent: FC = () => {
  const { columnReducer }: any = useSelector(state => state)
  console.log(columnReducer)
  const [showManage, setShowManage] = useState(false);
  const onclick = () => {
    setShowManage(true);
  };

  const header: HeaderType = {
    title: "Column",
    subTitle: "this is columns sub title",
    actions: <NewButton onClick={() => onclick()} />,
  };

  const popupWindowClose = () => {
    setShowManage(false)
  }

  return (
    <SC.ColumnsWrapper>
      <HeaderComponent {...header}/>
      {showManage && (
        <>
          <PopupWindow onClose={() => setShowManage(false)} title={'Add Column'}>
            <ManageColumns onClose={popupWindowClose} />
          </PopupWindow>
        </>
      )}
      {(columnReducer.dataList.length !== 0) && <SC.ColumnTable>
        <SC.ColumnTableItem>
          <SC.ColumnTableThreads span='4'>
            <h6>
              Name
            </h6>
          </SC.ColumnTableThreads>
          <SC.ColumnTableThreads>
            <h6>
              Type
            </h6>
          </SC.ColumnTableThreads>
        </SC.ColumnTableItem>
        {
          columnReducer.dataList.map(
            ({type, name} , index) => (
              <SC.ColumnTableItem key={index}>
                <SC.ColumnTableThreads span='4'>
                  <ColumnIcon type={type} />
                    <h6 style={{margin : 0}}>
                      {name}
                    </h6>
                </SC.ColumnTableThreads>
                <SC.ColumnTableThreads span='7'>
                  {type}
                </SC.ColumnTableThreads>
                <SC.ColumnTableThreads span='1'>
                  <SC.ColumnIcon>
                    <IconEdit />
                  </SC.ColumnIcon>
                  <SC.ColumnIcon>
                    <IconDelete />
                  </SC.ColumnIcon>
                </SC.ColumnTableThreads>
              </SC.ColumnTableItem>
            ))}
      </SC.ColumnTable>
      }
    </SC.ColumnsWrapper>
  );
};

export default memo(ListComponent);
