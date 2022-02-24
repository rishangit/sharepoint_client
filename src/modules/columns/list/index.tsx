import { FC, memo, useState } from "react";
import { NewButton,PopupWindow } from "@app/common";
import { ColumnsWrapper } from "../columns.styled";
import HeaderComponent, { HeaderType } from "@modules/header";
import ManageColumns from "../manage";
import { useSelector } from "react-redux";


const ListComponent: FC = () => {
  const { columnReducer } : any  = useSelector ( state  => state)
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
          <PopupWindow onClose={()=>setShowManage(false)} title = {'Add Column'}>
            <ManageColumns />
          </PopupWindow>
        </>
      )}
      { columnReducer.columnType.map(
        raw =>(
          <div key={raw.id} style={{display : 'flex'}}>

          <div style={{paddingRight : '10rem'}} >{raw.name}</div>
         
          <div>{raw.type}</div>
          </div>
        )
      )}
    </ColumnsWrapper>
  );
};

export default memo(ListComponent);
