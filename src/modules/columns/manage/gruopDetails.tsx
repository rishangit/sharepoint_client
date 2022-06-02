
import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@progress/kendo-react-buttons"
import {
    Form,
    FormRenderProps,
    FormElement,
    Field
} from "@progress/kendo-react-form"
import {
    FormInput,
    FormRadioGroup,
    FormDropDownList,
    FormTextArea
} from "input-component";
import { ColumnType } from "../types"
import { fieldElementProps, columnTypeProps, setParamAddColumn } from "@modules/columns/manage/constant";
import { getGruopList } from "@modules/groups/selector";
import * as SC from './manage.styled';
import { addColumnData } from '@modules/columns/action';

const GruopDetails = ({ model, onClose }) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [getNewGroup, setGetNewGroup] = useState({});
    const dispatch = useDispatch();
    const groupList = getGruopList();
    const gruopData: Array<String> = groupList

    const onsubmit = (data: Object) => {
        dispatch(addColumnData(setParamAddColumn({ ...data, ...model })))
        onClose()
    }
    const saveColumnTypeWithNewgruop = () => {
        dispatch(addColumnData(setParamAddColumn({ ...getNewGroup, ...model })))
        onClose()
    }
    const selectTableType = ({ value }: any) => {
        setSelectedValue(value)
    }
    const addNewGruop = (data) => {
        setGetNewGroup(data)
    }

    const fliedProps: Object = fieldElementProps({
        model,
        FormInput,
        FormRadioGroup,
        FormDropDownList,
        FormTextArea
    })

    return (
        <>
            <SC.ManageWindowContainer>
                <Form render={
                    (formRenderProps: FormRenderProps) => (
                        <FormElement >
                            <SC.ColumnTypeRadioWrapper>
                                <Field
                                    {...fliedProps['groupRadio']}
                                    onChange={selectTableType}
                                />
                            </SC.ColumnTypeRadioWrapper>
                        </FormElement>
                    )}
                />
                {selectedValue == 'exGruop' && <>
                    <SC.ColumnGruopTypeTitle>Selecit From Exsisting Group</SC.ColumnGruopTypeTitle>
                    <Form onSubmit={onsubmit} render={
                        (formRenderProps: FormRenderProps) => (
                            <FormElement >
                                <SC.ColumnTypeRadioWrapper>
                                    <Field
                                        {...fliedProps['GroupdropDown']}
                                        data={gruopData}
                                    />
                                </SC.ColumnTypeRadioWrapper>
                                <SC.ButtonContainer>
                                    <Button
                                        themeColor={"primary"}
                                        type={"submit"}
                                        disabled={!formRenderProps.allowSubmit}
                                    >
                                        Save
                                    </Button>
                                </SC.ButtonContainer>
                            </FormElement>
                        )}
                    />
                </>}
                {selectedValue == 'newGruop' && <div style={{ marginTop: '2rem' }}>
                    <SC.ColumnGruopTypeTitle>Add new Gruop Type</SC.ColumnGruopTypeTitle>
                    <Form onSubmit={addNewGruop} render={
                        (formRenderProps: FormRenderProps) => (
                            <FormElement >
                                <SC.GroupInputContainer>
                                    <Field
                                        {...fliedProps['groupName']}
                                    />
                                    <Button
                                        themeColor={"primary"}
                                        type={"submit"}
                                        disabled={!formRenderProps.allowSubmit}
                                    >
                                        Add
                            </Button>
                                </SC.GroupInputContainer>
                            </FormElement>
                        )} />
                    <SC.ButtonContainer>
                        <Button
                            themeColor={"primary"}
                            type={"submit"}
                            // disabled={}
                            onClick={saveColumnTypeWithNewgruop}
                            >
                            Save
                        </Button>
                    </SC.ButtonContainer>
                </div>
                }
            </SC.ManageWindowContainer>
        </>
    )
}

export default memo(GruopDetails);
