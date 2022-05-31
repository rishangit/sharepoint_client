import React, { FC, memo, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as SC from '../tables.styled';
import { TableDataIcon } from 'app-iconwithname';
import { getColumnsList, getContentTypeList } from '@modules/tables/tables.selector';

const TableExpandedData = ({ columnData, contentTypeData }) => {
    const [renderExpandedData, setRenderExpandedData] = useState(false);
    const { dataList } = useSelector(getColumnsList)
    const { contentTypesList } = useSelector(getContentTypeList)
    const tableColumnData = dataList.filter(({name})=> name == columnData)
    console.log('columnData',tableColumnData)
    return (
        <>
            {/* <SC.TableTypeTableItem border={renderExpandedData}>
                <SC.TableThreads span='1'>
                </SC.TableThreads >
                <TableDataIcon span='10' name={name} type={type} bgColor={renderExpandedData} />
            </SC.TableTypeTableItem > */}
        </>
    )
}

export default TableExpandedData
