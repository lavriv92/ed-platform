import request from 'superagent';

const HOST : string = 'http://localhost:2300/api';

const uri = (endpoint : string) : string => `${HOST}/${endpoint}`;

const get = (endpoint : string, query: any) : string => {
  return request
    .query(query)
    .get(uri(endpoint));
};

const post = (endpoint : string, data: any) : Promise<any> => {
  return request
    .post(uri(endpoint), data);
};

const put = (endpoint : string, data) : Promise<any> => {
  return request
    .put(uri(endpoint));
};

const del = (endpoint : string) : Promise<any> => {
  return request.delete(uri(endpoint));
};

export default {
  get,
  post,
  put,
  delete: del
};
