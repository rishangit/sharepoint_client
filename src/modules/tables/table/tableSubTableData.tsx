import React, { FC, memo, useState } from 'react';
import * as SC from '../tables.styled';
import TableExpandedData from './tableExpandedData';
import { TableDataIcon } from 'app-iconwithname';
import { IconArrowUp, IconArrowDown, IconEdit, IconDelete } from '@app/icons';

const tableSubTableData = ({model, data, onDelete}) => {
    const [renderSubTable, setRenderSubTable] = useState(false);
    console.log(data)
    const onClckArrow = () => {
        setRenderSubTable(!renderSubTable)
    }
    const SubTableRender = () => {
        return (<>
            {data.map(({ columnsAutoComplete, contentTypeAutoComplete }) =>
                    <TableExpandedData columnData={columnsAutoComplete} contentTypeData={contentTypeAutoComplete}/>
            )}</>)}
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
