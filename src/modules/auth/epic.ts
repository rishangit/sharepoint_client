import { switchMap, map } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import {
  LOGIN_ATTEMPT,
  loginSuccess,
  LOGOUT_ATTEMPT,
  logOutSuccess,
} from './action';
import { httpPost, httpGet , USER_LOGIN, USER_LOGOUT} from '@sys/httpCall';

export const epicLogIn = (action$:any, state$:any) => {
  return action$.pipe(
    ofType(LOGIN_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: USER_LOGIN,
        data: { ...payload },
      }).pipe(map(result => loginSuccess(result))),
    ),
  );
};

export const epicLogOut = (action$:any, state$:any) => {
  return action$.pipe(
    ofType(LOGOUT_ATTEMPT),
    switchMap(({ payload }) =>
      httpGet({
        call: USER_LOGOUT,
      }).pipe(map(result => logOutSuccess(result))),
    ),
  );
};

const authEpic = combineEpics(epicLogIn, epicLogOut);

export default authEpic;
