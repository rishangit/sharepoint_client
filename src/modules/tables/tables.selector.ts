import { rootState } from "@sys/types";

export const getContentTypeList = (state: rootState) => state.contentTypesReducer;
export const getColumnsList = (state: rootState) => state.columnReducer;
export const getTableList = (state: rootState) => state.tablesReducer;
