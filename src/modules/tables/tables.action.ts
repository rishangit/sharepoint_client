export const SET_TABLE_DATA = 'SET_TABLE_DATA';
export const  REMOVE_TABLE_DATA = ' REMOVE_TABLE_DATA';

export const setTableData = (payload : any) =>({
    type : SET_TABLE_DATA,
    payload
})
export const deleteTableData = (payload : any) =>({
    type :  REMOVE_TABLE_DATA,
    payload
})

export {}