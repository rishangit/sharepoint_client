import { useDispatch, useSelector } from "react-redux";

import { rootState } from "@sys/types";

export const getDataList = (state: rootState) => state.columnReducer;

export const getColumnFromState = (manageID)=>{
    const {dataList} = useSelector((state: rootState) => state.columnReducer)
    const column = dataList.filter(({name})=>name == manageID)
    return(column)
}
