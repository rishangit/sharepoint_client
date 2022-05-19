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

export interface rootState {
    systemReducer:systemReducer,
    authReducer: authReducer,
    columnReducer: columnReducer,
    groupReducer: groupReducer
  }