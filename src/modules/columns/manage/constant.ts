const radioData: Array<any> = [
  { label: "Short Text", value: "shortText" },
  { label: "Long Text", value: "longText" },
];
const numberTypes: Array<string> = [
  "Short Number",
  "Long Number",
];

const inputValidator = (value) => (!value ? "* required" : "");

export const fieldElementProps = ({ FormRadioGroup, FormInput, FormDropDownList }) => ({
  columnName: {
    id: 'name',
    name: 'name',
    component: FormInput,
    hint: 'Hint : Enter the Column Name',
    validator: inputValidator
  },
  radio: {
    id: 'textType',
    name: 'textType',
    data: radioData,
    component: FormRadioGroup,
    defaultValue: radioData[0].value,
    hint: 'Hint : Enter the Column Type',
  },
  dropDown: {
    id: "numberType",
    name: "numberType",
    label: "Select Type",
    component: FormDropDownList,
    data: numberTypes,
    validator: inputValidator,
  }
})