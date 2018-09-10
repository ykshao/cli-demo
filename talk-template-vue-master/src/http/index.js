import * as http from './http'

export const $http = http

export default {
  install (Vue) {
    Vue.prototype.$http = http
  }
}
