import request from '@/utils/request'

export function getPage(query) {
  return request({
    url: '/flow/user-password/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/flow/user-password',
    method: 'post',
    data: obj
  })
}

export function delObj(id) {
  return request({
    url: '/flow/user-password/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/flow/user-password',
    method: 'put',
    data: obj
  })
}