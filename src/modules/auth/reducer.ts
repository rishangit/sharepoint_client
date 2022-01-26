import { LoginStatus, RegisterStatus } from './constant';
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SET_USER,
} from './action';
import { apiStatus } from '@sys/httpCall';

const initState = {
  loginStatus: LoginStatus.LOGIN_NEW,
  session: null,
  registerStatus: RegisterStatus.REGISTER_NEW,
};

const authReducer = (state = initState, action:any) => {
  let { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      {
        const { status, response } = payload;
        if (status === apiStatus.success) {
          localStorage.setItem('session', JSON.stringify(response));
          return {
            ...state,
            session: response,
            loginStatus: LoginStatus.LOGIN_SUCCESS,
          };
        }
      }
      break;
    case LOGOUT_SUCCESS:
      {
        const { status } = payload;
        if (status === apiStatus.success) {
          localStorage.removeItem('session');
          return {
            ...state,
            session: null,
            loginStatus: LoginStatus.LOGIN_NEW,
          };
        }
      }
      break;
    case SET_USER:
      return {
        ...state,
        session: payload,
        loginStatus: LoginStatus.LOGIN_SUCCESS,
      };
    default:
      return state;
  }
  return state;
};

export default authReducer;
