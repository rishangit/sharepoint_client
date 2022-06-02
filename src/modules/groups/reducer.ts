import { SET_GROUP_DATA,  REMOVE_GROUP_DATA } from "./action";
// {dataList : Array<Object>}
const initialState : any = {
    groupList: []
}

const groupReducer : any = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_GROUP_DATA: return {
            ...state,
            groupList : payload,
        }
        case  REMOVE_GROUP_DATA: return {
            ...state,
            groupList : [...payload],
        }
        default: return state
    }
}
export default groupReducer;