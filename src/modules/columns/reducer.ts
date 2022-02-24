import { COLUMN_DATA } from "@modules/columns/action";

const initialState : {columnType : Array<Object>} = {
    columnType: []
}

const columnReducer : any = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case COLUMN_DATA: return {
            ...state,
            columnType : [...state.columnType, {...payload.data,...payload.model}]
        }
        default: return state
    }
}
export default columnReducer