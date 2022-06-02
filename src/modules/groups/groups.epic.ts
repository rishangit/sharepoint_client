import { ofType, combineEpics } from 'redux-observable';
import { switchMap, map, groupBy, mergeMap } from 'rxjs/operators';
import { httpGet, httpPost } from '@sys/httpCall';
import {
    GET_GROUP_DATA,
    setGroupData
} from './action';

export const epicGetResults = (action$, state$) => {
  return action$.pipe(
    ofType(GET_GROUP_DATA),
    switchMap(({ payload }) => 
    httpGet({
        call: `sharepoint/GetSiteGroups`,
      }).pipe(map((result:any) => setGroupData(result.Data)))
    )
  );
};

const groupEpic = combineEpics(
     epicGetResults,
);

export default groupEpic;
