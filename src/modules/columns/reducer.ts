import { SET_COLUMN_DATA } from "@modules/columns/action";
import { DELETE_COLUMN_DATA, SET_NEW_COLUMN_DATA } from "@modules/columns/action";

const initialState: { dataList: Array<Object> } = {
    dataList: []
}

const columnReducer: any = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_COLUMN_DATA: 
        console.log('colmun deatila from api',payload)
        return {
            ...state,
            dataList: payload
        }
        case DELETE_COLUMN_DATA: return {
            ...state,
            dataList: payload
        }
        case SET_NEW_COLUMN_DATA: 
        console.log('colmun add new column from api',payload)
        return {
            ...state,
            dataList: [payload,...state.dataList]
        }
        default: return state
    }
}
export default columnReducer