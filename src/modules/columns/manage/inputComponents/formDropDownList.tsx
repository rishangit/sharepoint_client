import * as React from "react";
import { FieldRenderProps, FieldWrapper } from "@progress/kendo-react-form";
import { Label, Error, Hint } from "@progress/kendo-react-labels";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const hintData: Function = (hintId, hint) => <Hint id={hintId}>{hint}</Hint>
const errorData: Function = (errorId, validationMessage) => <Error id={errorId}>{validationMessage}</Error>

export const FormDropDownList = (fieldRenderProps: FieldRenderProps) => {
    const {
        validationMessage,
        touched,
        label,
        id,
        valid,
        disabled,
        hint,
        wrapperStyle,
        ...others
    } = fieldRenderProps;
    const editorRef = React.useRef<any>(null);

    const showValidationMessage: string | false | null =
        touched && validationMessage;
    const showHint: boolean = !showValidationMessage && hint;
    const hintId: string = showHint ? `${id}_hint` : "";
    const errorId: string = showValidationMessage ? `${id}_error` : "";
    const labelId: string = label ? `${id}_label` : "";

    return (
        <FieldWrapper style={wrapperStyle}>
            <Label
                id={labelId}
                editorRef={editorRef}
                editorId={id}
                editorValid={valid}
                editorDisabled={disabled}
            >
                {label}
            </Label>
            <DropDownList
                style={{ width: '50%' }}
                ariaLabelledBy={labelId}
                ariaDescribedBy={`${hintId} ${errorId}`}
                ref={editorRef}
                valid={valid}
                id={id}
                disabled={disabled}
                {...others}
            />
            {showHint && <Hint id={hintId}>{hint}</Hint>}
            {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
        </FieldWrapper>
    );
};