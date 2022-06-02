import { rootState } from "@sys/types";
import {  useSelector } from "react-redux";

export const getGruopList = ()=>{
    const {groupList} = useSelector((state: rootState) => state.groupReducer)
    return groupList
};