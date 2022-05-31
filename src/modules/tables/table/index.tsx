import { FC, memo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderComponent, { HeaderType } from "@modules/header";
import { NewButton, PopupWindow } from '@app/common';

import * as SC from '../tables.styled'
import ManageTableComponent from "../manageTable";





const AddTableListComponent = () => {
    const [showManage, setShowManage] = useState(false);
    const [height, setHeight] = useState(400);
    const header: HeaderType = {
        title: "Table Lists",
        subTitle: "this is Table Lists sub title",
        actions: <NewButton onClick={() => onclick()} />,
    }
    const onclick = () =>{
        setShowManage(!showManage)
        setHeight(400)
    }

    return (
        <SC.TableListWrapper>
            <HeaderComponent {...header}/>
            <PopupWindow
                      show={showManage}
                      onClose={() => setShowManage(false)}
                      title={'Add Groups'}
                      initialHeight={height}
                      height={height}
             >
             <ManageTableComponent onClose={onclick} setHeight={setHeight}/>
             </PopupWindow>
        </SC.TableListWrapper>
    )
}

export default AddTableListComponent
