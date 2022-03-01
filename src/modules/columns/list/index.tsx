import { FC, memo, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap"

import { NewButton, PopupWindow } from "@app/common";
import { ColumnsWrapper } from "../columns.styled";
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
      {/* { columnReducer.dataList.map(
        raw =>(
          <div key={raw.id} style={{display : 'flex'}}>

          <div style={{paddingRight : '10rem'}} >{raw.name}</div>
         
          <div>{raw.type}</div>
          </div>
        )
      )} */}
      <div>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {
              columnReducer.dataList.map(
                raw => (
                  <tr>
                    <td>
                      {raw.name}
                    </td>
                    <td>
                      {raw.type}
                    </td>
                  </tr>
                )
              )
            }
          </tbody>
        </Table>
      </div>
    </ColumnsWrapper>
  );
};

export default memo(ListComponent);
