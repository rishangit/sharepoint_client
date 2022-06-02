import { combineEpics } from 'redux-observable';

import authEpic from '../modules/auth/epic';
import columnEpic from '@modules/columns/columns.epic';
import groupEpic from '@modules/groups/groups.epic';

const rootEpic = combineEpics(
    authEpic,
    columnEpic,
    groupEpic
);

export default rootEpic;
