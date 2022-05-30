import React, { FC, memo, useState } from 'react';
import * as SC from '../contentTypes.styled'
import { TableDataIcon } from 'app-iconwithname';
import { IconArrowUp, IconArrowDown, IconEdit, IconDelete } from '@app/icons';

const ContentTypeTableData = ({ model, data, onDelete }) => {
    const [renderSubTable, setRenderSubTable] = useState(false);

    const onClckArrow = () => {
        setRenderSubTable(!renderSubTable)
    }

    const SubTableRender = () => {
        return (<>
                {data.map(({ name, type }) =>
                    <SC.ContentTableItem border={renderSubTable}>
                        <SC.TableThreads span='1'>
                        </SC.TableThreads >
                        <TableDataIcon span='10' name={name} type={type} bgColor={renderSubTable} />
                    </SC.ContentTableItem >
                )}
                </>
            )}

    return (<>
            <SC.ContentTableItem key={model.contentTypeName} border={renderSubTable}>
                <TableDataIcon span='6' name={model.contentTypeName} type={'CONTENT'} >
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
            </SC.ContentTableItem>
            {renderSubTable && <SubTableRender />}
        </>
    )}

export default ContentTypeTableData
