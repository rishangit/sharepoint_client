const inputValidator = (value) => (!value ? "* required" : "");

export const radioData: Array<Object> = [
    { label: "Create New Columns", value: "newColumn" },
    { label: "Use Exsisting Columns", value: "exsistingColumn" },
];

const addContentTypeProps = ({ FormRadioGroup, FormInput }) => {
    return ({
        contentTypeName: {
            id: 'contentTypeName',
            label: 'Content Type Name',
            name: 'contentTypeName',
            component: FormInput,
            hint: 'Hint : Enter the Content Type Name',
            validator: inputValidator,
        },
        contentTpyeradio: {
            id: 'contentTpye',
            name: 'contentTpye',
            label: 'Content Type',
            data: radioData,
            component: FormRadioGroup,
            // defaultValue: radioData[0].value,
            hint: 'Hint : Select the Content Type',
            validator: inputValidator,
        }
    })
}
const contentTypeProps = ({ FormAutoCompleteDropDownList }) => {
    return ({
        contentAutoComplete: {
            id: 'contentAutoComplete',
            label: 'Add the Content Type Columns',
            name: 'contentAutoComplete',
            component: FormAutoCompleteDropDownList,
            hint: 'Hint : Add the Content Type Columns',
            validator: inputValidator,
        }
    })
}

export { addContentTypeProps, contentTypeProps }