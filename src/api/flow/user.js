import request from '@/utils/request'

export function getPage(query) {
  return request({
    url: '/flow/user/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/flow/user',
    method: 'post',
    data: obj
  })
}

export function delObj(id) {
  return request({
    url: '/flow/user/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/flow/user',
    method: 'put',
    data: obj
  })
}