import * as React from "react";
import { FieldRenderProps, FieldWrapper } from "@progress/kendo-react-form";
import { RadioGroup } from "@progress/kendo-react-inputs";
import { Label, Error, Hint } from "@progress/kendo-react-labels";

const hintData: Function = (hintId, hint) => <Hint id={hintId}>{hint}</Hint>
const errorData: Function = (errorId, validationMessage) => <Error id={errorId}>{validationMessage}</Error>

export const FormRadioGroup = (fieldRenderProps: FieldRenderProps) => {
    const {
        validationMessage,
        touched,
        id,
        label,
        valid,
        disabled,
        hint,
        visited,
        modified,
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
        <FieldWrapper>
            <Label
                id={labelId}
                editorRef={editorRef}
                editorId={id}
                editorValid={valid}
                editorDisabled={disabled}
            >
                {label}
            </Label>
            <RadioGroup
                ariaDescribedBy={`${hintId} ${errorId}`}
                ariaLabelledBy={labelId}
                valid={valid}
                disabled={disabled}
                ref={editorRef}
                {...others}
            />
            {showHint && hintData(hintId, hint)}
            {showValidationMessage && errorData(errorId, validationMessage)}
        </FieldWrapper>
    );
};