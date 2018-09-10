import { request } from 'axios-add-jsonp'
// 文档地址: https://www.npmjs.com/package/axios-add-jsonp

export function getApiXxx () {
  return request.get('/api/xxx')
}
