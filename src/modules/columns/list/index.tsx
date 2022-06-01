import { FC, memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NewButton, PopupWindow } from "@app/common";
import * as SC from "../columns.styled";
import HeaderComponent, { HeaderType } from "@modules/header";
import ManageColumns from "../manage";
import { IconDelete, IconEdit } from "@app/icons";
import { deleteColumnData } from "@modules/columns/action";
import { TableDataIcon } from 'app-iconwithname'


const ListComponent: FC = () => {
  const dispatch = useDispatch()
  const { columnReducer }: any = useSelector(state => state)
  const [showManage, setShowManage] = useState(false);
  const [manageID, setManageID] = useState(null);


  const onclick = () => {
    setShowManage(true);
  };

  const editColumn = (name) => {
    setManageID(name)
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
        <ManageColumns onClose={popupWindowClose} manageID={manageID} show={()=>setShowManage(true)}/>
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
            ({ type, name, groupType }, index) => (
              <SC.TableItem key={index}>
                <TableDataIcon span='4' type={type} name={name} />
                <SC.TableThreads span='3'>
                  {type}
                </SC.TableThreads>
                <SC.TableThreads span='4'>
                  {groupType}
                </SC.TableThreads>
                <SC.TableThreads span='1'>
                  <SC.TableIcon onClick={() => editColumn(name)}>
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
