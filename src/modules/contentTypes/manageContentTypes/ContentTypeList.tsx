import React, { memo, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@progress/kendo-react-buttons"
import {AutoCompleteChangeEvent} from "@progress/kendo-react-dropdowns";
import { Form, FormRenderProps, FormElement, Field } from "@progress/kendo-react-form"

import {
    FormAutoCompleteDropDownList
} from "input-component";
import * as SC from '../contentTypes.styled';
import { contentTypeProps } from './constant'
import { IconDelete } from '@app/icons';
import { setContentTypeData } from '@modules/contentTypes/contentTypes.action';
import { getDataList } from '@modules/columns/columns.selector';
import { ColumnIcon, TableDataIcon } from 'app-iconwithname';

const ContentTypeList = ({ onClose, model }) => {
    const dispatch = useDispatch()
    const [autoCompleteData, setAutoCompleteData] = useState([])

    const { dataList } = useSelector(getDataList)

    const autoCompleteDropDownData = dataList.map(({ name, type }) => ({ name, type }));
    const fliedProps: Object = contentTypeProps({ FormAutoCompleteDropDownList })
    
    const onsubmit = (data: any) => {
        console.log('data',data)
        const selectedValue = data?.contentAutoComplete;
        const updatedData = autoCompleteDropDownData.filter((data: any)=> data.name ==selectedValue)
        setAutoCompleteData([...autoCompleteData, ...updatedData])
    }
    console.log(autoCompleteData)
    const onDeleteColumn = (name) => {
        setAutoCompleteData(autoCompleteData.filter((column) => column.name != name))
    }
    const saveData = () => {
        dispatch(setContentTypeData({ model, autoCompleteData }))
        onClose()
    }
    const getIconType = (name) => {
        const getType = dataList.filter((data)=> data.name == name)
        console.log
    }
    const itemRender = (li, itemProps) => {

        const itemChildren= (
            <SC.ItemRenderWrapper>
                <ColumnIcon type={itemProps.dataItem.type} />
                {itemProps.dataItem.name}
            </SC.ItemRenderWrapper>
        );
        return React.cloneElement(li, li.props, itemChildren);
    };

    return (
        <SC.ContentTypeWindowContainer>
            <h2>Add new Content Type</h2>
            {dataList.length > 0 ? <Form onSubmit={onsubmit} render={
                (formRenderProps: FormRenderProps) => (
                    <FormElement >
                        <SC.AutoCompleteContainer>
                            <Field
                                {...fliedProps['contentAutoComplete']}
                                data={autoCompleteDropDownData}
                                itemRender={itemRender}
                                textField={"name"}
                            />
                            <Button
                                themeColor={"primary"}
                                type={"submit"}
                                disabled={!formRenderProps.allowSubmit}
                            >
                                Add
                        </Button>
                        </SC.AutoCompleteContainer>
                    </FormElement>
                )}
            /> :
                'You Need to Add Columns First'
            }
            {autoCompleteData.length > 0 && <SC.Table secondary>
                <SC.TableItem>
                    <SC.TableThreads span='4'>
                        <h6>
                            Name
                        </h6>
                    </SC.TableThreads>
                </SC.TableItem>
                {autoCompleteData.map(({ name, type }, index) =>
                    <SC.TableItem key={index}>
                        <TableDataIcon span='6' name={name} type={type}/>
                        <SC.TableThreads span='5'>
                        </SC.TableThreads>
                        <SC.TableThreads span='1'>
                            <SC.TableIcon onClick={() => onDeleteColumn(name)}>
                                <IconDelete />
                            </SC.TableIcon>
                        </SC.TableThreads>
                    </SC.TableItem>
                )}
            </SC.Table>}
            <SC.ButtonContainer>
                <Button
                    themeColor={"primary"}
                    type={"submit"}
                    onClick={saveData}
                >
                    Save
                </Button>
            </SC.ButtonContainer>
        </SC.ContentTypeWindowContainer>
    )
}

export default memo(ContentTypeList);