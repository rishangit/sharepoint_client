import { combineReducers } from 'redux';

import authReducer from '../modules/auth/reducer';
import columnReducer from '../modules/columns/reducer';
import systemReducer from '../system/reducer'
import groupReducer from '@modules/groups/reducer';


const rootReducer = combineReducers({ authReducer, systemReducer , columnReducer, groupReducer });

export default rootReducer;
