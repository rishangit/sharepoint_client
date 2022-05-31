export interface systemReducer{
    navigation:{
      selectedId?:string
    }
  }

export interface authReducer{
  loginStatus: any,
  session: null,
  registerStatus: any,
  }

export interface columnReducer{
  dataList: any[]
  }

export interface groupReducer{
  groupList: any[]
  }
export interface contentTypesReducer{
  contentTypesList: any[]
  }
export interface tablesReducer{
  TablesList: any[]
  }

export interface rootState {
    systemReducer:systemReducer,
    authReducer: authReducer,
    columnReducer: columnReducer,
    groupReducer: groupReducer
    contentTypesReducer: contentTypesReducer
    tablesReducer: tablesReducer
  }