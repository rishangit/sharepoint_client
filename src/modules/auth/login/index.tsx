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

const inputValidator = (value) => (!value ? "Please enter a text." : "");

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
          id != 'email' && <Hint direction={"end"} style={{ position: "absolute", right: 0 }}>
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
  // const btnProps: ButtonType = {
  //   themeColor: 'primary',
  // };
  const max = 20;
  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* This is login \{USER_LOGIN}
      <Button themeColor='primary'>Login </Button> */}
      <Form
        initialValues={{
          username: "",
          email: ""
        }}
        onSubmit={handleSubmit}
        render={(formRenderProps) => (

          <FormElement style={{ width: 500, position: "absolute" }}>
            <fieldset className={"k-form-fieldset"}>
              <Field
                id={"username"}
                name={"username"}
                label={"Username:"}
                max={max}
                value={formRenderProps.valueGetter("username")}
                hint={"Hint: Enter your text here"}
                component={FormInput}
                validator={inputValidator}
              />
              <Field
                id={"email"}
                name={"email"}
                type={"email"}
                label={"Email:"}
                value={formRenderProps.valueGetter("email")}
                hint={"Hint: Enter your Email here"}
                component={FormInput}
                validator={inputValidator}
              />
              <div className="k-form-buttons k-justify-content-end">
                <Button
                  themeColor={"primary"}
                  type={"submit"}
                  disabled={!formRenderProps.allowSubmit}
                >
                  Send
              </Button>
              </div>
            </fieldset>
          </FormElement>
        )}
      />
    </div>
  );
};

export default LoginComponent;
