import React, { FC, memo, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as SC from '../tables.styled';
import TableExpandedData from './tableExpandedData';
import { getColumnsList, getContentTypeList } from '@modules/tables/tables.selector';
import { TableDataIcon } from 'app-iconwithname';
import { IconArrowUp, IconArrowDown, IconEdit, IconDelete } from '@app/icons';

const tableSubTableData = ({ model, data, onDelete }) => {
    const [renderSubTable, setRenderSubTable] = useState(false);
    const { dataList } = useSelector(getColumnsList)
    const { contentTypesList } = useSelector(getContentTypeList)
    console.log('data', data)
    const onClckArrow = () => {
        setRenderSubTable(!renderSubTable)
    }
    const SubTableRender = () => {
        const [renderContent, setRenderContentTable] = useState(false);
        const columnData = data.filter((column) => column.columnsAutoComplete)
        const contentTypeData = data.filter((content) => content.contentTypeAutoComplete)
        const selectedColumnData = columnData.map((column) => dataList.filter(({ name }) => column.columnsAutoComplete == name))
        const selectedContentTypeData = contentTypeData.map((contentType) => contentTypesList.filter(({ model }) => model.contentTypeName == contentType.contentTypeAutoComplete))

        return (
            <>
            {selectedColumnData.map(data=>data.map(({name,type}, index)=>
                <SC.TableTypeTableItem key={index}border={true}>
                    <SC.TableThreads span='1'>
                    </SC.TableThreads >
                    <TableDataIcon span='10' name={name && name} type={type} bgColor={true} />
                </SC.TableTypeTableItem>))} 
            {selectedContentTypeData.map(data=>data.map(({model, autoCompleteData}, index)=>
                <TableExpandedData key={index} model={model} data={autoCompleteData}/> 
            ))}
        </>
    )}

    return (
        <>
            <SC.TableTypeTableItem key={model.tableName} border={renderSubTable}>
                <TableDataIcon span='6' name={model.tableName} type={'TABLE'} >
                    <SC.TableIcon onClick={() => onClckArrow()}>
                        {(renderSubTable) ? <IconArrowUp /> : < IconArrowDown />}
                    </SC.TableIcon>
                </TableDataIcon>
                <SC.TableThreads span='5'>
                </SC.TableThreads>
                <SC.TableThreads span='1'>
                    <SC.TableIcon >
                        <IconEdit />
                    </SC.TableIcon>
                    <SC.TableIcon onClick={() => onDelete(model)}>
                        <IconDelete />
                    </SC.TableIcon>
                </SC.TableThreads>
            </SC.TableTypeTableItem>
            {renderSubTable && <SubTableRender />}
        </>
    )
}

export default tableSubTableData
