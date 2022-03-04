import * as React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@progress/kendo-react-buttons"
import { Form, FormRenderProps, FormElement, Field } from "@progress/kendo-react-form"

import { ColumnType } from "../types"
import { FormInput, FormRadioGroup, FormDropDownList } from "@modules/columns/manage/form.column.components";
import { fieldElementProps } from "@modules/columns/manage/constant";
import { SET_COLUMN_DATA } from "@modules/columns/action";


const ColumnDetails = ({ model, onClose }) => {
  const dispatch = useDispatch()
  const onsubmit = (data: Object) => {
    dispatch({ type: SET_COLUMN_DATA, payload: { ...data, ...model } })
    onClose(false)
  }
  const fliedProps: Object = fieldElementProps({ model, FormInput, FormRadioGroup, FormDropDownList })

  const columnTextFileds = () => (
    <div>
      <h2>Add new {model.type} Field</h2>
      <Form onSubmit={onsubmit} render={
        (formRenderProps: FormRenderProps) => (
          <FormElement >
            <Field
              {...fliedProps['columnName']}
            />
            {model.type === ColumnType.TEXT && <Field
              {...fliedProps['radio']}
            />}
            <Button
              themeColor={"primary"}
              type={"submit"}
              disabled={!formRenderProps.allowSubmit}
            >
              Submit
        </Button>
          </FormElement>
        )}
      />
    </div>)
  const columnNumberFileds = () => (
    <div>
      <h2>Add new {model.type} Field</h2>
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

  switch (model.type) {
    case ColumnType.TEXT:
    case ColumnType.RICHTEXT:
    case ColumnType.EMAIL:
    case ColumnType.PASSWORD:
    case ColumnType.BOOLEAN:
      return (
        columnTextFileds()
      );
    case ColumnType.NUMBER:
    case ColumnType.DATE:
      return (
        columnNumberFileds()
      )
    default: return (
      <div>This Column Type</div>
    )
  }


}
export default ColumnDetails;
