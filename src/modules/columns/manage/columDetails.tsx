import * as React from "react";
import { useDispatch, useSelector} from "react-redux";
import { Button } from "@progress/kendo-react-buttons"
import { Form, FormRenderProps, FormElement, Field } from "@progress/kendo-react-form"

import { ColumnType } from "../types"
import { FormInput, FormRadioGroup, FormDropDownList } from "@modules/columns/manage/form.column.components";
import { fieldElementProps } from "@modules/columns/manage/constant";
import { SET_COLUMN_DATA } from "@modules/columns/action";
import { getGruopList } from "@modules/groups/selector";
import * as SC from './manage.styled';



const ColumnDetails = ({ model, onClose }) => {
  const dispatch = useDispatch()
  const { groupList } = useSelector(getGruopList)
  const gruopData: Array<String> = groupList.map(({name})=> name)

  const onsubmit = (data: Object) => {
    dispatch({ type: SET_COLUMN_DATA, payload: { ...data, ...model } })
    onClose(false)
  }
  const fliedProps: Object = fieldElementProps({ model, FormInput, FormRadioGroup, FormDropDownList })
  
  const ColumnTextFileds = () => (
    <SC.ManageWindowContainer>
        <h2>Add New {model.type} Field</h2>
      <Form onSubmit={onsubmit} render={
        (formRenderProps: FormRenderProps) => (
          <FormElement >
            <Field
              {...fliedProps['columnName']}
            />
            {model.type === ColumnType.TEXT && <Field
              {...fliedProps['radio']}
            />}
            <Field
              {...fliedProps['GroupdropDown']}
              data={gruopData}
            />
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
    </SC.ManageWindowContainer>)
  const ColumnNumberFileds = () => (
    <SC.ManageWindowContainer>
        <h2>Add New {model.type} Field</h2>
      <Form onSubmit={onsubmit} render={
        (formRenderProps: FormRenderProps) => (
          <FormElement>
            <Field
              {...fliedProps['columnName']}
            />
            <Field
              {...fliedProps['dropDown']}
            />
            <Field
              {...fliedProps['GroupdropDown']}
              data={gruopData}
            />
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
        )
      } />
    </SC.ManageWindowContainer>);

  switch (model.type) {
    case ColumnType.TEXT:
    case ColumnType.RICHTEXT:
    case ColumnType.EMAIL:
    case ColumnType.PASSWORD:
    case ColumnType.BOOLEAN:
      return (
        <ColumnTextFileds />
      );
    case ColumnType.NUMBER:
    case ColumnType.DATE:
      return (

        <ColumnNumberFileds />
      )
    default: return (
      <div>This Column Type</div>
    )
  }
}

export default ColumnDetails;
