export const SET_COLUMN_DATA = 'COLUMNS/SET_COLUMN_DATA';
export const GET_COLUMN_DATA = 'COLUMNS/GET_COLUMN_DATA';
export const DELETE_COLUMN_DATA = 'COLUMNS/DELETE_COLUMN_DATA';
export const ADD_COLUMN_DATA = 'COLUMNS/ADD_COLUMN_DATA';
export const SET_NEW_COLUMN_DATA = 'COLUMNS/SET_NEW_COLUMN_DATA';

export const setColumnData = (payload : any) =>({
    type : SET_COLUMN_DATA,
    payload
})
export const getColumnData = (payload : any) =>({
    type : GET_COLUMN_DATA,
    payload
})
export const deleteColumnData = (payload : any) =>({
    type : DELETE_COLUMN_DATA,
    payload
})
export const addColumnData = (payload : any) =>({
    type : ADD_COLUMN_DATA,
    payload
})
export const setNewColumnData = (payload : any) =>({
    type : SET_NEW_COLUMN_DATA,
    payload
})
