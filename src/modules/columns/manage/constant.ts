import { ColumnType } from "@modules/columns/types";
import { useSelector } from 'react-redux'
import { getGruopList } from "@modules/groups/selector";

const radioData: Array<Object> = [
  { label: "Short Text", value: "shortText" },
  { label: "Long Text", value: "longText" },
];

const numberTypes: Array<String> = [
  "Short Number",
  "Long Number",
];
const dateTypes: Array<String> = [
  "date",
  "datetime",
  "time",
];

const inputValidator = (value) => (!value ? "* required" : "");


const fieldElementProps = ({ model, FormRadioGroup, FormInput, FormDropDownList, FormTextArea }) => {
  return (
    {
      columnName: {
        id: 'name',
        label: 'Name',
        name: 'name',
        component: FormInput,
        hint: 'Hint : Enter the Column Name',
        validator: inputValidator,
      },
      radio: {
        id: 'textType',
        name: 'textType',
        label: 'Type',
        data: radioData,
        component: FormRadioGroup,
        // defaultValue: radioData[0].value,
        hint: 'Hint : Enter the Column Type',
        validator: inputValidator,
      },
      dropDown: {
        id: "numberType",
        name: "numberType",
        label: "Select Type",
        component: FormDropDownList,
        data: model.type === ColumnType.NUMBER && numberTypes || model.type === ColumnType.DATE && dateTypes,
        validator: inputValidator,
        hint: 'Hint : Select the Number Type',
      },
      GroupdropDown: {
        id: "groupType",
        name: "groupType",
        label: "Group Type",
        component: FormDropDownList,
        validator: inputValidator,
        hint: 'Hint : Select the Group Type',
      },
      LookUpdropDown: {
        id: "lookUpdropDown",
        name: "lookUpdropDown",
        label: "Look Up",
        component: FormDropDownList,
        validator: inputValidator,
        hint: 'Hint : Select the Look Up Type',
      },
      calculatedTextArea: {
        id: "calculatedTextArea",
        name: "calculatedTextArea",
        label: "Insert Formula",
        component: FormTextArea,
        hint: 'Hint : Type your Formula',
        validator: inputValidator,
        max: 200,
      },
      mediaTextArea: {
        id: "mediaTextArea",
        name: "mediaTextArea",
        label: "Insert Media Link",
        component: FormTextArea,
        hint: 'Hint : Insert your Link',
        validator: inputValidator,
        max: 200,
      }
    })
}

const columnTypeProps = [
  {
    type: ColumnType.TEXT,
    name: 'Text',
    desc: 'Small or long text like title or description',
  },
  {
    type: ColumnType.RICHTEXT,
    name: 'Rich Text',
    desc: 'A rich text editor with formatting options',
  },
  {
    type: ColumnType.NUMBER,
    name: 'Number',
    desc: 'Numbers (integer, float, decimal)',
  },
  {
    type: ColumnType.EMAIL,
    name: 'Email',
    desc: 'Email field with validations format',
  },
  {
    type: ColumnType.PASSWORD,
    name: 'Password',
    desc: 'Password field with encryption',
  },
  {
    type: ColumnType.DATE,
    name: 'Date',
    desc: 'A date picker with hours, minutes and seconds',
  },
  {
    type: ColumnType.BOOLEAN,
    name: 'Boolean ',
    desc: 'Yes or no, 1 or 0, true or false',
  },
  {
    type: ColumnType.LOOKUP,
    name: 'Look Up',
    desc: 'Add Column Name to Look Up',
  },
  {
    type: ColumnType.MEDIA,
    name: 'Media',
    desc: 'Add Media Link',
  },
  {
    type: ColumnType.CALCULATED,
    name: 'Calculated Formula',
    desc: 'Add your Calculated Formula here',
  }
]

export { fieldElementProps, columnTypeProps }

