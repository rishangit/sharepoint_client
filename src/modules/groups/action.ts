export const SET_GROUP_DATA = 'SET_GROUP_DATA';
export const  GET_GROUP_DATA = ' GET_GROUP_DATA';
export const  REMOVE_GROUP_DATA = ' REMOVE_GROUP_DATA';

export const setGroupData = (payload : any) =>({
    type : SET_GROUP_DATA,
    payload
})
export const getGroupData = (payload : any) =>({
    type : GET_GROUP_DATA,
    payload
})
export const deleteGroupData = (payload : any) =>({
    type :  REMOVE_GROUP_DATA,
    payload
})