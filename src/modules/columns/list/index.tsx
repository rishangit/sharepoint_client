import { FC, memo, useState } from "react";
import { useSelector } from "react-redux";
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import { NewButton, PopupWindow } from "@app/common";
import { ColumnsWrapper, ColumnTable, ColumnTableThreads, ColumnTableItem, ColumnIcon } from "../columns.styled";
import HeaderComponent, { HeaderType } from "@modules/header";
import ManageColumns from "../manage";
import { IconText } from "@modules/columns/common/column.icons";
import { IconFa } from "@app/icons";


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
    <ColumnsWrapper>
      <HeaderComponent {...header}></HeaderComponent>
      {showManage && (
        <>
          <PopupWindow onClose={() => setShowManage(false)} title={'Add Column'}>
            <ManageColumns onClose={popupWindowClose} />
          </PopupWindow>
        </>
      )}
      {(columnReducer.dataList.length !== 0) && <ColumnTable>
        <ColumnTableItem>
          <ColumnTableThreads span='4'>
            <h6>
              Name
            </h6>
          </ColumnTableThreads>
          <ColumnTableThreads>
            <h6>
              Type
            </h6>
          </ColumnTableThreads>
        </ColumnTableItem>
        {
          columnReducer.dataList.map(
            (raw, index) => (
              <ColumnTableItem key={index}>
                <ColumnTableThreads span='4'>
                  <IconText keyIcon={raw.type} />
                    <h6 style={{margin : 0}}>
                      {raw.name}
                    </h6>
                </ColumnTableThreads>
                <ColumnTableThreads span='7'>
                  {raw.type}
                </ColumnTableThreads>
                <ColumnTableThreads span='1'>
                  <ColumnIcon>
                    <IconFa icon={faPen} />
                  </ColumnIcon>
                  <ColumnIcon>
                    <IconFa icon={faTrashCan} />
                  </ColumnIcon>
                </ColumnTableThreads>
              </ColumnTableItem>
            ))}
      </ColumnTable>
      }
    </ColumnsWrapper>
  );
};

export default memo(ListComponent);
