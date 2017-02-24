var {
  md5
} = require('./_md5.js')
// var axios = require('axios')
// var CryptoJS = require('./mode-ecb-min.js')
var Fingerprint = require('fingerprintjs')
// npm包
Fingerprint = new Fingerprint()

Rest.prototype.init = function() {
  var req = {} //
  var head = {} // 头部
  var body = {} // body
  var deviceId = md5(Fingerprint.get().toString())
  deviceId = deviceId.substr(17)
  this.deviceId = deviceId
  head.deviceId = deviceId
  head.requestId = new Date().getTime().toString()
  head.signature = 'null'
  req.head = head
  req.body = body
  this.param = req
  console.log(deviceId + '---' + head.requestId + '-----' + head.signature + '----' + req.head + '----' + req.body + '----' + this.param)
}
/**
 * 排序
 */
Rest.prototype.sort = function(_param) {
  var _head = _param.head
  var _body = _param.body
  var headArr = []
  var bodyArr = []
  var head = {}
  var body = {}
  var key = 0
  var value = 0
  var i = 0

  // 先将对象转化为数组
  for (key in _head) {
    headArr.push(key)
  }
  for (key in _body) {
    bodyArr.push(key)
  }
  /*
   * 对键的数组排序
   */
  headArr = headArr.sort(function(a, b) {
    if (/^\d/.test(a) ^ /^\D/.test(b)) return a > b ? 1 : (a === b ? 0 : -1)
    return a > b ? -1 : (a === b ? 0 : 1)
  })
  bodyArr = bodyArr.sort(function(a, b) {
    if (/^\d/.test(a) ^ /^\D/.test(b)) return a > b ? 1 : (a === b ? 0 : -1)
    return a > b ? -1 : (a === b ? 0 : 1)
  })
  // 组装对象
  for (i = 0; i < headArr.length; i++) {
    key = headArr[i]
    value = _head[key]
    head[key] = value
  }
  for (i = 0; i < bodyArr.length; i++) {
    key = bodyArr[i]
    value = _body[key]
    body[key] = value
  }
  _param.body = body
  _param.head = head
  return _param
}
Rest.prototype.cfgExtend = function(req, param) {
  // if (!param || typeof param !== 'object') return ''
  for (var key in param) {
    req[key] = param[key]
  }
  return req
}
Rest.prototype.post = function(url, param) {
  var that = this
  that.url = url
  // console.log(that.url)
  var _param = that.cfgExtend({}, that.param)
  console.log(_param)
  for (var key in param) {
    // 放进head的参数
    if (key === 'businessId') {
      _param.head.businessId = param[key]
    } else if (key === 'body') {
      // 放进body的参数
      if (!param[key]) param.body = 'null'
      _param.body = param[key]
    }
  }
  _param = that.sort(_param)
  // var abc = JSON.stringify(_param.body)
  // var _head = JSON.stringify(_param.head)
  // var str_param = 'callcenter{"body":' + _body + ',"head":' + _head + '}crm'
  // var signature = md5(str_param)
  console.log(_param.body)
}

function Rest() {
  this.init()
}

const rest_ = new Rest()
// 一些公共函数
module.exports = {
  rest_
}
