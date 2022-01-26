import { combineEpics } from 'redux-observable';

import authEpic from '../modules/auth/epic';

const rootEpic = combineEpics(authEpic);

export default rootEpic;
