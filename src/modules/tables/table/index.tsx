import { FC, memo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderComponent, { HeaderType } from "@modules/header";
import { NewButton, PopupWindow } from '@app/common';

import * as SC from '../tables.styled'
import ManageTableComponent from "../manageTable";
import TableSubTableData from './tableSubTableData';
import { getTableList } from "@modules/tables/tables.selector";
import { deleteTableDataFromReducer } from "@modules/tables/tables.action";

const AddTableListComponent = () => {
    const [showManage, setShowManage] = useState(false);
    const dispatch = useDispatch()
    const [height, setHeight] = useState(400);
    const {tablesList} = useSelector(getTableList)
    const header: HeaderType = {
        title: "Table Lists",
        subTitle: "this is Table Lists sub title",
        actions: <NewButton onClick={() => onclick()} />,
    }
    const onclick = () =>{
        setShowManage(!showManage)
        setHeight(400)
    }
    const onDeleteTable = (model) => {
        const removeData = tablesList.filter((contentType: any) => contentType.model != model)
        dispatch(deleteTableDataFromReducer(removeData))
        console.log('removeData', removeData)
    };
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
            { tablesList.length > 0 && <SC.Table>
                <SC.TableItem>
                    <SC.TableThreads span='4'>
                        <h6>
                            Name
                        </h6>
                    </SC.TableThreads>
                </SC.TableItem>
                {tablesList.map(({ model, tableData }) =>
                    <TableSubTableData model={model} data={tableData} onDelete={onDeleteTable} />
                )}
                </SC.Table>
            }
        </SC.TableListWrapper>
    )
}

export default AddTableListComponent
