import { SET_POPUPWINDOW } from "@sys/action";

interface popupWindow {
  visible: boolean,
  height: number,
  title: string,
  content: any,
}

const initialState = {
  popupWindow: {
    visible: false,
    height: null,
    title: null,
    content: null,
  }
}

const systemReducer = (state = initialState, action: any) => {

  const { type, payload } = action;
  switch (type) {
    case SET_POPUPWINDOW: 
    debugger
    return {
      ...state,
      popupWindow : {
        ...state.popupWindow,
        ...payload
      }
    }
    default:
    return state;
  }

}
export default systemReducer