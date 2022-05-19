export const SET_COLUMN_DATA = 'COLUMNS/SET_COLUMN_DATA';
export const DELETE_COLUMN_DATA = 'COLUMNS/DELETE_COLUMN_DATA';

export const setColumnData = (payload : any) =>({
    type : SET_COLUMN_DATA,
    payload
})
export const deleteColumnData = (payload : any) =>({
    type : DELETE_COLUMN_DATA,
    payload
})
