import { FC, memo, useState } from "react";
import { useSelector } from "react-redux";


import { NewButton, PopupWindow } from "@app/common";
import { ColumnsWrapper, ColumnTable, ColumnTableThreads, ColumnTableItem, ColumnIcon } from "../columns.styled";
import HeaderComponent, { HeaderType } from "@modules/header";
import ManageColumns from "../manage";


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

  return (
    <ColumnsWrapper>
      <HeaderComponent {...header}></HeaderComponent>
      {showManage && (
        <>
          <PopupWindow onClose={() => setShowManage(false)} title={'Add Column'}>
            <ManageColumns />
          </PopupWindow>
        </>
      )}
      <ColumnTable>
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
            raw => (
              <ColumnTableItem>
                <ColumnTableThreads span='4'>
                  <ColumnIcon>
                    Ab
                  </ColumnIcon>
                  {raw.name}
                </ColumnTableThreads>
                <ColumnTableThreads span='7'>
                  {raw.type}
                </ColumnTableThreads>
                <ColumnTableThreads span='1'>
                <ColumnIcon>
                    Ab
                  </ColumnIcon>
                  <ColumnIcon>
                    Ab
                  </ColumnIcon>
                </ColumnTableThreads>
              </ColumnTableItem>
            )
          )
        }
      </ColumnTable>

    </ColumnsWrapper>
  );
};

export default memo(ListComponent);
