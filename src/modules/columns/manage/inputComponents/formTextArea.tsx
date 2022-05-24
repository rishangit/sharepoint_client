import * as React from "react";
import { FieldWrapper } from "@progress/kendo-react-form";
import { TextArea } from "@progress/kendo-react-inputs";
import { Label, Error, Hint } from "@progress/kendo-react-labels";


const hintData: Function = (hintId, hint) => <Hint id={hintId}>{hint}</Hint>
const errorData: Function = (errorId, validationMessage) => <Error id={errorId}>{validationMessage}</Error>

export const FormTextArea = (fieldRenderProps: any) => {
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
      max,
      wrapperStyle,
      value,
      ...others
    } = fieldRenderProps;
    const editorRef = React.useRef<any>(null);
    console.log('value', value)
    const showValidationMessage: string | false | null = touched && validationMessage;
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
        <TextArea
          style={{ width: '50%' }}
          valid={valid}
          type={type}
          id={id}
          disabled={disabled}
          maxLength={max}
          rows={4}
          ariaDescribedBy={`${hintId} ${errorId}`}
          {...others}
        />
        <div style={{ display: 'flex', width: '50%'}}>
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        <Hint direction={"end"} style={{ marginLeft: 'auto'}}>
          {value?.length ? value?.length : 0} / {max}
        </Hint>
        </div>
        {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
      </FieldWrapper>
    );
  };