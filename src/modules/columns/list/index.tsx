import { FC, memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NewButton, PopupWindow } from "@app/common";
import * as SC from "../columns.styled";
import HeaderComponent, { HeaderType } from "@modules/header";
import ManageColumns from "../manage";
import { ColumnIcon } from "@modules/columns/common/column.icons";
import { IconDelete , IconEdit } from "@app/icons";
import { deleteColumnData } from "@modules/columns/action";


const ListComponent: FC = () => {
  const dispatch = useDispatch()
  const { columnReducer }: any = useSelector(state => state)
  const [showManage, setShowManage] = useState(false);
  
  const onclick = () => {
    setShowManage(true);
  };

  const header: HeaderType = {
    title: "Column",
    subTitle: "this is columns sub title",
    actions: <NewButton onClick={() => onclick()} />,
  };

  const deleteColumn = (name) => {
    const newColumns = columnReducer.dataList.filter((column: any) => column.name !== name) 
    dispatch(deleteColumnData(newColumns))
  }

  const popupWindowClose = () => {
    setShowManage(false)
  }

  return (
    <SC.ColumnsWrapper>
      <HeaderComponent {...header}></HeaderComponent>
      <PopupWindow show={showManage} onClose={() => setShowManage(false)} title={'Add Column'}>
        <ManageColumns onClose={popupWindowClose} />
      </PopupWindow>
      {(columnReducer.dataList.length !== 0) && <SC.Table>
        <SC.TableItem>
          <SC.TableThreads span='4'>
            <h6>
              Name
            </h6>
          </SC.TableThreads>
          <SC.TableThreads span='3'>
            <h6>
              Type
            </h6>
          </SC.TableThreads>
          <SC.TableThreads span='4'>
            <h6>
              Gruop
            </h6>
          </SC.TableThreads>
        </SC.TableItem>
        {
          columnReducer.dataList.map(
            ({type, name, groupType} , index) => (
              <SC.TableItem key={index}>
                <SC.TableThreads span='4'>
                  <ColumnIcon type={type} />
                    <h6 style={{margin : 0}}>
                      {name}
                    </h6>
                </SC.TableThreads>
                <SC.TableThreads span='3'>
                  {type}
                </SC.TableThreads>
                <SC.TableThreads span='4'>
                  {groupType}
                </SC.TableThreads>
                <SC.TableThreads span='1'>
                  <SC.TableIcon>
                    <IconEdit />
                  </SC.TableIcon>
                  <SC.TableIcon onClick={() => deleteColumn(name)}>
                    <IconDelete />
                  </SC.TableIcon>
                </SC.TableThreads>
              </SC.TableItem>
            ))}
      </SC.Table>
      }
    </SC.ColumnsWrapper>
  );
};

export default memo(ListComponent);
