import axios from 'axios'

let base = ''

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data) }
export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }) }
export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }) }
export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }) }
export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }) }
export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }) }
// 测试请求
// export const zs = params => { return axios.post('http://192.168.88.40:8080/autoweb/order/orderItemListByUserPrecept.do?user_precept_id=1', params).then(res => res.data) }
