import React, { memo, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@progress/kendo-react-buttons"
import { Form, FormRenderProps, FormElement, Field } from "@progress/kendo-react-form"

import {
    FormAutoCompleteDropDownList
} from "input-component";
import * as SC from '../contentTypes.styled';
import { contentTypeProps } from './constant'
import { IconDelete } from '@app/icons';
import { setContentTypeData } from '@modules/contentTypes/contentTypes.action';
import { getDataList } from '@modules/columns/columns.selector';

const ContentTypeList = ({ onClose, model }) => {
    const dispatch = useDispatch()
    const [autoCompleteData, setAutoCompleteData] = useState([])
    const {dataList} = useSelector(getDataList)
    const autoCompleteDropDownData = dataList.map(({name})=> name);
    const fliedProps: Object = contentTypeProps({ FormAutoCompleteDropDownList })

    const onsubmit = (data: any) => {
        const selectedValue = data ?.contentAutoComplete;
        setAutoCompleteData([...autoCompleteData, { type: selectedValue }])
    }
    console.log(autoCompleteData)
    const onDeleteColumn = (type) => {
        setAutoCompleteData(autoCompleteData.filter((column) => column.type != type))
    }
    const saveData = () => {
        dispatch(setContentTypeData({ model, autoCompleteData }))
        onClose()
    }
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
            />: 
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
                {autoCompleteData.map(({ type }, index) =>
                    <SC.TableItem key={index}>
                        <SC.TableThreads span='6'>
                            {type}
                        </SC.TableThreads>
                        <SC.TableThreads span='5'>
                        </SC.TableThreads>
                        <SC.TableThreads span='1'>
                            <SC.TableIcon onClick={() => onDeleteColumn(type)}>
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