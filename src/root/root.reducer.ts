import { combineReducers } from 'redux';

import authReducer from '../modules/auth/reducer';

const rootReducer = combineReducers({ authReducer });

export default rootReducer;
