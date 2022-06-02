import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@progress/kendo-react-buttons"
import {
  Form,
  FormRenderProps,
  FormElement,
  Field
} from "@progress/kendo-react-form"
import {
  FormInput,
  FormRadioGroup,
  FormDropDownList,
  FormTextArea
} from "input-component";
import { ColumnType } from "../types"
import { fieldElementProps, columnTypeProps } from "@modules/columns/manage/constant";
import { getGruopList } from "@modules/groups/selector";
import * as SC from './manage.styled';

const ColumnDetails = ({ model, setModel }) => {
  const dispatch = useDispatch()
  const groupList = getGruopList();

  const gruopData: Array<String> = groupList
  const lookUpData: Array<String> = gruopData

  const onsubmit = (data: Object) => {
    setModel((prev: any) => ({ ...prev,...data }))
  }

  const fliedProps: Object = fieldElementProps({
    model,
    FormInput,
    FormRadioGroup,
    FormDropDownList,
    FormTextArea
  })
  
  const ColumnTextFileds = () => (
    <SC.ManageWindowContainer>
      <h2>Add New {model.type} Field</h2>
      <Form onSubmit={onsubmit} render={
        (formRenderProps: FormRenderProps) => (
          <FormElement >
            <Field
              {...fliedProps['columnName']}
            />
            <SC.ColumnTypeRadioWrapper>
            {model.type === ColumnType.TEXT && <Field
              {...fliedProps['radio']}
            />}
            </SC.ColumnTypeRadioWrapper>
            <SC.ButtonContainer>
              <Button
                themeColor={"primary"}
                type={"submit"}
                disabled={!formRenderProps.allowSubmit}
              >
                Next
              </Button>
            </SC.ButtonContainer>
          </FormElement>
        )}
      />
    </SC.ManageWindowContainer>)

  const ColumnCalculatedFileds = () => (
    <SC.ManageWindowContainer>
      <h2>Add New {model.type} Field</h2>
      <Form onSubmit={onsubmit} render={
        (formRenderProps: FormRenderProps) => (
          <FormElement >
            <Field
              {...fliedProps['columnName']}
            />
            <Field
              {...fliedProps['calculatedTextArea']}
              value={formRenderProps.valueGetter("sendInvitation")}
            />
            <SC.ButtonContainer>
              <Button
                themeColor={"primary"}
                type={"submit"}
                disabled={!formRenderProps.allowSubmit}
              >
                Next
              </Button>
            </SC.ButtonContainer>
          </FormElement>
        )}
      />
    </SC.ManageWindowContainer>);

  const ColumnLookUpFileds = () => (
    <SC.ManageWindowContainer>
      <h2>Add New {model.type} Field</h2>
      {groupList.length > 0 ? <Form onSubmit={onsubmit} render={
        (formRenderProps: FormRenderProps) => (
          <FormElement >
            <Field
              {...fliedProps['columnName']}
            />
            <Field
              {...fliedProps['LookUpdropDown']}
              data={lookUpData}
            />
            <SC.ButtonContainer>
              <Button
                themeColor={"primary"}
                type={"submit"}
                disabled={!formRenderProps.allowSubmit}
              >
                Next
              </Button>
            </SC.ButtonContainer>
          </FormElement>
        )}
      />
        :
        <div>
          Please Add Columns First
       </div>
      }
    </SC.ManageWindowContainer>);

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
            <SC.ButtonContainer>
              <Button
                themeColor={"primary"}
                type={"submit"}
                disabled={!formRenderProps.allowSubmit}
              >
                Next
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
    case ColumnType.MEDIA:
      return (
        <ColumnTextFileds />
      );
    case ColumnType.LOOKUP:
      return (
        <ColumnLookUpFileds />
      );
    case ColumnType.CALCULATED:
      return (
        <ColumnCalculatedFileds />
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
