import { SET_NAVIGATION } from "@sys/action";
import { systemReducer } from './types'

const initialState:systemReducer = {
  navigation: {},
};

const reducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NAVIGATION:
      return {
        ...state,
        navigation: { ...state.navigation, selectedId: payload },
      };

    default:
      break;
  }
  return state;
};
export default reducer;
