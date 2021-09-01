import request from '@/utils/request'

export function getPage(query) {
  return request({
    url: '/flow/flow/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/flow/flow',
    method: 'post',
    data: obj
  })
}

export function delObj(id) {
  return request({
    url: '/flow/flow/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/flow/flow',
    method: 'put',
    data: obj
  })
}