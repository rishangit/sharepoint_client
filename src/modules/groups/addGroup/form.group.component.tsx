import * as React from "react";
import { FieldRenderProps, FieldWrapper } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { Label, Error, Hint } from "@progress/kendo-react-labels";


const hintData: Function = (hintId, hint) => <Hint id={hintId}>{hint}</Hint>
const errorData: Function = (errorId, validationMessage) => <Error id={errorId}>{validationMessage}</Error>


export const FormInput = (fieldRenderProps: FieldRenderProps) => {
    const {
        validationMessage,
        touched,
        label,
        id,
        valid,
        disabled,
        hint,
        type,
        optional,
        ...others
    } = fieldRenderProps;

    const labelProps: object = {
        editorId: id,
        editorValid: valid,
        editorDisabled: disabled,
        optional: optional,
    }

    const showValidationMessage: string | false | null =
        touched && validationMessage;
    const showHint: boolean = !showValidationMessage && hint;
    const hintId: string = showHint ? `${id}_hint` : "";
    const errorId: string = showValidationMessage ? `${id}_error` : "";

    return (
        <FieldWrapper>
            <Label
                {...labelProps}
            >
                {label}
            </Label>
            <div className={"k-form-field-wrap"} style={{ width: '50%' }}>
                <Input
                    valid={valid}
                    type={type}
                    id={id}
                    disabled={disabled}
                    ariaDescribedBy={`${hintId} ${errorId}`}
                    {...others}
                />
                {showHint && hintData(hintId, hint)}
                {showValidationMessage && errorData(errorId, validationMessage)
                }
            </div>
        </FieldWrapper>
    );
};
