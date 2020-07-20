import http from 'axios';
import {Constant} from '@theme';
import R from 'ramda';

function _post(url, headers, data) {
  return http
    .post(url, data, headers)
    .then((res) => res.data)
    .then((r) => {
      console.log('reposnse', url, r);
      if (R.and(!R.isNil(r), !R.isEmpty(r))) {
        return r;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log('reposnse-error', url, err);
      return false;
    });
}
function _get(url, headers, data) {
  return http
    .get(url, headers)
    .then((res) => res.data)
    .then((r) => {
      console.log('reposnse', url, r);
      if (R.and(!R.isNil(r), !R.isEmpty(r))) {
        return r;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log('reposnse-error', url, err);
      return false;
    });
}

function _do_call(type, url, headers = {}, data = {}) {
  url = `${Constant.dataUrl + url}`;
  console.log('payload', type, url, headers, data);
  switch (type) {
    case 'POST':
      return _post(url, headers, data);

    case 'GET':
      return _get(url, headers, data);

    case 'PUT':
      break;
  }
}

const HttpCalls = {_do_call, _post, _get};

export default HttpCalls;
