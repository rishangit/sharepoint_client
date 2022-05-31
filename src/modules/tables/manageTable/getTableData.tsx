import React,{memo} from 'react'
import * as SC from '../tables.styled'
import { addTableProps } from './constant'

import {
    FormInput,
} from "input-component";

import { Button } from "@progress/kendo-react-buttons"
import { Form, FormRenderProps, FormElement, Field } from "@progress/kendo-react-form"

const GetTableData = ({ setModel }) => {
    const fliedProps: Object = addTableProps({ FormInput })
    const onsubmit = (data: Object) => {
        console.log(data)
        setModel(data)
    }
    return (
        <SC.TableDataWindowContainer>
            <h2>Add new Content Type</h2>
            <Form onSubmit={onsubmit} render={
                (formRenderProps: FormRenderProps) => (
                    <FormElement >
                        <Field
                            {...fliedProps['tableName']}
                        />
                        <SC.ButtonContainer>
                            <Button
                                themeColor={"primary"}
                                type={"submit"}
                                disabled={!formRenderProps.allowSubmit}
                            >
                                Next
                            </Button>
                        </SC.ButtonContainer>
                    </FormElement>
                )}
            />
        </SC.TableDataWindowContainer>
    )
}

export default memo(GetTableData)
