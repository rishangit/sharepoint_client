import { SET_COLUMN_DATA } from "@modules/columns/action";

const initialState : {dataList : Array<Object>} = {
    dataList: []
}

const columnReducer : any = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_COLUMN_DATA: return {
            ...state,
            dataList : [...state.dataList, {...payload}]
        }
        default: return state
    }
}
export default columnReducer