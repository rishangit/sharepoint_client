import React, { memo } from 'react';
import {
    FormInput,
    FormRadioGroup,
} from "input-component";

import { Button } from "@progress/kendo-react-buttons"
import { Form, FormRenderProps, FormElement, Field } from "@progress/kendo-react-form"

import * as SC from '../contentTypes.styled';
import { addContentTypeProps } from './constant'

const AddContentTypes = ({ setModel }) => {

    const fliedProps: Object = addContentTypeProps({
        FormInput,
        FormRadioGroup
    })

    const onsubmit = (data: Object) => {
        console.log(data)
        setModel(data)
    }
    return (
            <SC.ContentTypeWindowContainer>
                <h2>Add new Content Type</h2>
                <Form onSubmit={onsubmit} render={
                    (formRenderProps: FormRenderProps) => (
                        <FormElement >
                            <Field
                                {...fliedProps['contentTypeName']}
                            />
                            <SC.ContentTypeRadioWrapper>
                            <Field
                                {...fliedProps['contentTpyeradio']}
                            />
                            </SC.ContentTypeRadioWrapper>
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
            </SC.ContentTypeWindowContainer>
    )
}

export default memo(AddContentTypes);
