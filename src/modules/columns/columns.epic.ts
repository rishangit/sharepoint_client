import { ofType, combineEpics } from 'redux-observable';
import { switchMap, map, groupBy, mergeMap } from 'rxjs/operators';
import { httpGet, httpPost } from '@sys/httpCall';
import {
    GET_COLUMN_DATA,
    ADD_COLUMN_DATA,
    setColumnData,
    setNewColumnData
} from './action';

export const epicGetResults = (action$, state$) => {
  return action$.pipe(
    ofType(GET_COLUMN_DATA),
    switchMap(({ payload }) => 
    httpGet({
        call: `sharepoint/GetSiteColumns`,
      }).pipe(map((result:any) => setColumnData(result.Data)))
    )
  );
};

export const epicAddColumn = (action$, state$) => {
    return action$.pipe(
      ofType(ADD_COLUMN_DATA),
      switchMap(({ payload }) => 
      httpPost({
          call: `sharepoint/CreateColumn`,
          data: payload
        }).pipe(map((result:any) => setNewColumnData(result.Data.Data)))
      )
    );
  };

const columnEpic = combineEpics(
     epicGetResults,
     epicAddColumn
);

export default columnEpic;
