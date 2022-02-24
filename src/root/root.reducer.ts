import { combineReducers } from 'redux';

import authReducer from '../modules/auth/reducer';
import columnReducer from '../modules/columns/reducer';
import systemReducer from '../system/reducer'


const rootReducer = combineReducers({ authReducer, systemReducer , columnReducer });

export default rootReducer;
