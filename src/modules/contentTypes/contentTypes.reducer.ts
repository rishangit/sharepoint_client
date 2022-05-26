import { SET_CONTENT_TYPE_DATA,  REMOVE_CONTENT_TYPE_DATA } from "./contentTypes.action";
// {dataList : Array<Object>}
const initialState : any = {
    contentTypesList: []
}

const contentTypesReducer : any = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_CONTENT_TYPE_DATA: return {
            ...state,
            contentTypesList : [...state.contentTypesList,payload],
        }
        case  REMOVE_CONTENT_TYPE_DATA: return {
            ...state,
            contentTypesList : [...payload],
        }
        default: return state
    }
}
export default contentTypesReducer;