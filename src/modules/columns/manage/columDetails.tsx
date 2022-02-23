import * as React from "react";

import { ColumnType } from "../types"
import { Form, FormRenderProps, FormElement, Field } from "@progress/kendo-react-form"
import { Button } from "@progress/kendo-react-buttons"
import { FormInput, FormRadioGroup, FormDropDownList } from "@modules/columns/manage/form.column.components";
import { fieldElementProps } from "@modules/columns/manage/constant";


const ColumnDetails = ({ model }) => {
  const onsubmit = (data: any) => {
    console.log('form-data', data ,'this is model', model)
  }
  const fliedProps: any = fieldElementProps({ FormInput, FormRadioGroup, FormDropDownList })
  if (model.type === ColumnType.TEXT) return (
    <div>
      <h2>Add new {ColumnType.TEXT} Field</h2>
      <Form onSubmit={onsubmit} render={
        (formRenderProps: FormRenderProps) => (
          <FormElement>
            <Field
              {...fliedProps['columnName']}
            />
            <Field
              {...fliedProps['radio']}
            />
            <Button
              themeColor={"primary"}
              type={"submit"}
              disabled={!formRenderProps.allowSubmit}
            >
              Submit
            </Button>
          </FormElement>
        )
      }
      />
    </div>
  );
  if (model.type === ColumnType.NUMBER) return (
    <div>
      <h2>Add new {ColumnType.NUMBER} Field</h2>
      <Form onSubmit={onsubmit} render={
        (formRenderProps: FormRenderProps) => (
          <FormElement>
            <Field
              {...fliedProps['columnName']}
            />
            <Field
              {...fliedProps['dropDown']}
            />
            <Button
              themeColor={"primary"}
              type={"submit"}
              disabled={!formRenderProps.allowSubmit}
            >
              Submit
            </Button>
          </FormElement>
        )
      } />
    </div>);
}
export default ColumnDetails;
