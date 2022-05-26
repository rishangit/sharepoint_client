import React from 'react'
import { useDispatch } from "react-redux";

import { Button } from "@progress/kendo-react-buttons"
import { Form, FormRenderProps, FormElement, Field } from "@progress/kendo-react-form"
import { fieldElementProps } from './constant';
import { FormInput } from 'input-component';
import { setGroupData } from "@modules/groups/action";
import * as  SC from './addGroup.styled'

const GroupAdder = ({ onClose }) => {
    const dispatch = useDispatch()
    const fliedProps: Object = fieldElementProps({ FormInput })
    const onsubmit = (data: Object) => {
        console.log(data)
        dispatch(setGroupData([data]))
        onClose()
    }
    return (
        <SC.GroupWindowContainer>
            <h2>Add new Group Field</h2>
            <Form onSubmit={onsubmit} render={
                (formRenderProps: FormRenderProps) => (
                    <FormElement >
                        <Field
                            {...fliedProps['groupName']}
                        />
                        <SC.ButtonContainer>
                            <Button
                                themeColor={"primary"}
                                type={"submit"}
                                disabled={!formRenderProps.allowSubmit}
                            >
                            Submit
                            </Button>
                        </SC.ButtonContainer>
                    </FormElement>
                )}
            />
        </SC.GroupWindowContainer>
    )
}

export default GroupAdder

