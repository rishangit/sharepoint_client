import { ColumnType } from "@modules/columns/types";

const inputValidator = (value) => (!value ? "* required" : "");


const fieldElementProps = ({ FormInput }) => {

  return (
    {
      groupName: {
        id: 'name',
        label: 'Name',
        name: 'name',
        component: FormInput,
        hint: 'Hint : Enter the Group Name',
        validator: inputValidator
      }
    })
}


export { fieldElementProps }

