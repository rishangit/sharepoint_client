import React, { FC, memo, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as SC from '../tables.styled';
import { IconArrowUp, IconArrowDown, IconEdit, IconDelete } from '@app/icons';
import { TableDataIcon } from 'app-iconwithname';
import { getColumnsList, getContentTypeList } from '@modules/tables/tables.selector';

const TableExpandedData = ({model,data}) => {
    const [renderContent, setRenderContentTable] = useState(false);

    const RenderTableContentTypeData = ({name,type}) => {
        return(
            <SC.TableTypeTableItem border={true}>
            <SC.TableThreads span='1'>
            </SC.TableThreads >
            <TableDataIcon span='10' name={name && name} type={type} bgColor={true} />
        </SC.TableTypeTableItem>
        )}
        
    return (
        <>
        <SC.TableTypeTableItem  border={true} >
                    <SC.TableThreads span='1'>
                    </SC.TableThreads >
                    <TableDataIcon span='10' name={model.contentTypeName} type={'CONTENT'} bgColor={true} >
                    <SC.TableIcon onClick={()=> setRenderContentTable(!renderContent)}>
                        {(renderContent) ? <IconArrowUp /> : < IconArrowDown />}
                    </SC.TableIcon>
                </TableDataIcon>
                </SC.TableTypeTableItem>
            {renderContent && <RenderTableContentTypeData name={data.name} type={data.type}/>}
        </>
    )
}

export default TableExpandedData
