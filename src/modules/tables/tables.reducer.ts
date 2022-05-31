    import { SET_TABLE_DATA,  REMOVE_TABLE_DATA } from "./tables.action";
// {dataList : Array<Object>}
const initialState : any = {
    tablesList: []
}

const tablesReducer : any = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_TABLE_DATA: return {
            ...state,
            tablesList : [...state.tablesList,payload],
        }
        case  REMOVE_TABLE_DATA: return {
            ...state,
            tablesList : [...payload],
        }
        default: return state
    }
}
export default tablesReducer;

export {}