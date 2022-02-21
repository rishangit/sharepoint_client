export interface systemReducer{
    navigation:{
      selectedId?:string
    }
  }

export interface rootState {
    systemReducer:systemReducer,
  }