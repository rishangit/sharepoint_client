// import { ButtonType, Button } from '@primitives';
// import { USER_LOGIN } from '@sys/httpCall';
import * as React from "react";

import {
  Form,
  Field,
  FormElement,
  FieldWrapper,
} from "@progress/kendo-react-form";
import { Label, Hint, Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { formElementProps, initialModel } from "./constant";

const FormInput = (fieldRenderProps) => {
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
    value,
    ...others
  } = fieldRenderProps;

  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hindId = showHint ? `${id}_hint` : "";
  const errorId = showValidationMessage ? `${id}_error` : "";

  return (
    <FieldWrapper>
      <Label
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
        optional={optional}
      >
        {label}
      </Label>
      <div className={"k-form-field-wrap"}>
        <Input
          valid={valid}
          type={type}
          id={id}
          disabled={disabled}
          maxlength={max}
          ariaDescribedBy={`${hindId} ${errorId}`}
          {...others}
        />
        {
          id != 'password' && <Hint direction={"end"} style={{ position: "absolute", right: 0 }}>
            {value.length} / {max}
          </Hint>
        }
        {showHint && <Hint id={hindId}>{hint}</Hint>}
        {showValidationMessage && (
          <Error id={errorId}>{validationMessage}</Error>
        )}
      </div>
    </FieldWrapper>
  );
};

const LoginComponent = () => {

  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form
        initialValues={initialModel}
        onSubmit={handleSubmit}
        render={(formRenderProps) => {
          const fieldsProps = formElementProps({ formRenderProps, FormInput });
          return (
            <FormElement style={{ width: 500, position: "absolute" }}>
              <fieldset className={"k-form-fieldset"}>
                <Field {...fieldsProps["username"]} />
                <Field {...fieldsProps["password"]} />
                <div className="k-form-buttons k-justify-content-end">
                  <Button
                  {...fieldsProps["submitBtn"]}
                    themeColor={"primary"}
                    type={"submit"}
                  >
                    Send
                  </Button>
                </div>
              </fieldset>
            </FormElement>
          );
        }}
      />
    </div>
  );
};

export default LoginComponent;
