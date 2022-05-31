export const SET_TABLE_DATA = 'SET_TABLE_DATA';
export const  REMOVE_TABLE_DATA = ' REMOVE_TABLE_DATA';

export const setTableToReducerData = (payload : any) =>({
    type : SET_TABLE_DATA,
    payload
})
export const deleteTableDataFromReducer = (payload : any) =>({
    type :  REMOVE_TABLE_DATA,
    payload
})

export {}