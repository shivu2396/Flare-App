import HttpCalls from './service';

export const getDemoData = async (data) => {
  let {_do_call} = HttpCalls;
  // let headers = await ServiceUtil.getServiceHeaders();
  let headers = {};
  console.log('Data', data);
  return _do_call('GET', `users/${data}`, headers, data);
};

export const getDemoDatanew = async (datas) => {
  let {_do_call} = HttpCalls;
  // let headers = await ServiceUtil.getServiceHeaders();
  let headers = {};
  console.log('Data', datas);
  return _do_call('POST', `users`, headers, datas);
};
