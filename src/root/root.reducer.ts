import { combineReducers } from 'redux';

import authReducer from '../modules/auth/reducer';
import columnReducer from '../modules/columns/reducer';
import systemReducer from '../system/reducer'
import groupReducer from '@modules/groups/reducer';
import contentTypesReducer from '@modules/contentTypes/contentTypes.reducer';
import tablesReducer from '@modules/tables/tables.reducer';
// import { rootState } from '@sys/types';


const rootReducer = combineReducers({ 
        authReducer, 
        systemReducer , 
        columnReducer, 
        groupReducer, 
        contentTypesReducer,
        tablesReducer
    });

export default rootReducer;
