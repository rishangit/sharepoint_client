import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { setActionBussy } from './actions';
import { switchMap, tap } from 'rxjs/operators';
// import { Session } from "@core-interface";

const httpPost = ({ call, data }) => {
  return httpCall('POST', call, data);
};

const httpGet = ({ call }) => {
  return httpCall('GET', call);
};

const httpDelete = ({ call }) => {
  return httpCall('DELETE', call);
};

const httpPut = ({ call, data }) => {
  return httpCall('PUT', call, data);
};

const httpCall = (type, call, data = null) => {
  setActionBussy(true);

  let request_url = process.env.REACT_APP_SERVER_PATH;
  let headers:any = {
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Origin': 'http://localhost:1096/api/',
    'Content-type': 'application/json',
  };

  let jsonData = null;
  if (data) {
    jsonData = JSON.stringify(data);
  }
  const sessionString = localStorage.getItem('session');
  request_url = `${request_url}/${call}`;
  if (sessionString) {
    const session: any = JSON.parse(sessionString);
     headers = {
       ...headers,
       'Authorization': session.AccessToken,
     };
  }

  return ajax({
    url: request_url,
    crossDomain: true,
    method: type,
    responseType: 'json',
    timeout: 0,
    headers,
    body: data ? jsonData : null,
    createXHR: function () {
      return new XMLHttpRequest();
    },
  }).pipe(
    tap(result => setActionBussy(false)),
    switchMap(data=> of(data.response)),
  );
};

const apiStatus = {
  success: 200,
};
export { httpPost, httpGet, httpDelete, httpPut, apiStatus };
