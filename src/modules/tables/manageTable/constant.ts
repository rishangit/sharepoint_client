
const inputValidator = (value) => (!value ? "* required" : "");
export const radioData: Array<Object> = [
    { label: "Use Exsisting Content Type", value: "contentType" },
    { label: "Use Exsisting Columns Type", value: "columnType" },
];

export const addTableProps = ({ FormInput }) => {
    return ({
        tableName: {
            id: 'tableName',
            label: 'Table Name',
            name: 'tableName',
            component: FormInput,
            hint: 'Hint : Enter the Table Name Name',
            validator: inputValidator
        }
    })
    }

export const tableInfoProps = ({ FormAutoCompleteDropDownList, FormRadioGroup }) => {
        return ({
            columnsAutoComplete: {
                id: 'columnsAutoComplete',
                label: 'Add the Columns Types',
                name: 'columnsAutoComplete',
                component: FormAutoCompleteDropDownList,
                hint: 'Hint : Add the Columns Types',
                validator: inputValidator,
            },
            contentTypeAutoComplete: {
                id: 'contentTypeAutoComplete',
                label: 'Add the Content Types',
                name: 'contentTypeAutoComplete',
                component: FormAutoCompleteDropDownList,
                hint: 'Hint : Add the Content Types',
                // validator: inputValidator,
            },
                contentTpyeradio: {
                id: 'tableType',
                name: 'tableType',
                label: 'Select Table Type',
                data: radioData,
                component: FormRadioGroup,
                // defaultValue: radioData[0].value,
                hint: 'Hint : Select the Table Type',
                validator: inputValidator,
            }
        })
    }