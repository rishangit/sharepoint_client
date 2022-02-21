import { combineReducers } from 'redux';

import authReducer from '../modules/auth/reducer';
import systemReducer from '../system/reducer'

const rootReducer = combineReducers({ authReducer, systemReducer});

export default rootReducer;
