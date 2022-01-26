export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const loginAttempt = (payload:any) => ({ type: LOGIN_ATTEMPT, payload });
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (payload:any) => ({ type: LOGIN_SUCCESS, payload });

export const LOGOUT_ATTEMPT = 'LOGOUT_ATTEMPT';
export const logOutAttempt = (payload:any) => ({ type: LOGOUT_ATTEMPT, payload });
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logOutSuccess = (payload:any) => ({ type: LOGOUT_SUCCESS, payload });

export const SET_USER = 'SET_USER';
export const setUser = (payload:any) => ({ type: SET_USER, payload });