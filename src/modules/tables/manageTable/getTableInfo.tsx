import React, { memo, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@progress/kendo-react-buttons"

import { Form, FormRenderProps, FormElement, Field } from "@progress/kendo-react-form"
import { FormAutoCompleteDropDownList, FormRadioGroup } from "input-component";
import * as SC from '../tables.styled'
import { tableInfoProps } from './constant'
import { getColumnsList, getContentTypeList } from '@modules/tables/tables.selector';
import { ColumnIcon } from 'app-iconwithname';

const GetTableInfo = ({ model, onClose, setHeight }) => {
    const [tableData,setTableData] = useState([])
    const [selectedValue,setSelectedValue] = useState('')
    const fliedProps: Object = tableInfoProps({ FormAutoCompleteDropDownList, FormRadioGroup})
    const { dataList } = useSelector(getColumnsList)
    const { contentTypesList } = useSelector(getContentTypeList)

    const columnData = dataList.map(({ name, type }) => ({ 'name': name, 'type': type }))
    const contentTypeData = contentTypesList.map(({ model }) => (model))

    const onsubmit = (data: Object) => {
        setTableData([...tableData, data])
        console.log('data', data)
    }
    const selectTableType = ({value}: any) => {
        setSelectedValue(value)
        setHeight(600)
        console.log(value)
    }
    // console.log('setInitialHeight',setInitialHeight() )
    const itemRenderColumn = (li, itemProps) => {
        const itemChildren = (
            <SC.ItemRenderWrapper>
                <ColumnIcon type={itemProps.dataItem.type} />
                {itemProps.dataItem.name}
            </SC.ItemRenderWrapper>
        );
        return React.cloneElement(li, li.props, itemChildren);
    };

    const itemRenderContentType = (li, itemProps) => {
        const itemChildren = (
            <SC.ItemRenderWrapper>
                <ColumnIcon type={'CONTENT'} />
                {itemProps.dataItem.contentTypeName}
            </SC.ItemRenderWrapper>
        );
        return React.cloneElement(li, li.props, itemChildren);
    };
    return (
        <SC.TableInfoWindowContainer>
            <h2>Add new Table Types</h2>
            <Form render={
                (formRenderProps: FormRenderProps) => (
                    <FormElement >
                        <SC.ContentTypeRadioWrapper>
                            <Field
                                {...fliedProps['contentTpyeradio']}
                                onChange={selectTableType}
                            />
                        </SC.ContentTypeRadioWrapper>
                    </FormElement>
                )}
            />
            {selectedValue === 'contentType' ? columnData.length > 0 ? <>
            <SC.TableSubTypeTitle>Add new Content Type</SC.TableSubTypeTitle>
            <Form onSubmit={onsubmit} render={
                (formRenderProps: FormRenderProps) => (
                    <FormElement >
                        <SC.AutoCompleteContainer>
                            <Field
                                {...fliedProps['columnsAutoComplete']}
                                data={columnData}
                                textField={'name'}
                                itemRender={itemRenderColumn}
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
                )}/>
            </> : 'You need to add contentTypes first' : ''}
            {selectedValue === 'columnType' ? contentTypeData.length > 0 ? <>
            <SC.TableSubTypeTitle>Add new Column Type</SC.TableSubTypeTitle>
            <Form onSubmit={onsubmit} render={
                (formRenderProps: FormRenderProps) => (
                    <FormElement >
                        <SC.AutoCompleteContainer>
                            <Field
                                {...fliedProps['contentTypeAutoComplete']}
                                data={contentTypeData}
                                textField={'contentTypeName'}
                                itemRender={itemRenderContentType}
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
            /></>: 'You Need to add Column types first' : ''}
            <SC.ButtonContainer>
                <Button
                    themeColor={"primary"}
                    type={"submit"}
                    disabled={tableData.length<0}
                    onClick={onClose}
                >
                Save
            </Button>
            </SC.ButtonContainer>
        </SC.TableInfoWindowContainer>
    )
}


export default memo(GetTableInfo)
