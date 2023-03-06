/**
 * 解析url里的参数
 * 就是提出 url 里的参数并转成对象
 */

function getUrlParams(url) {
  let reg = /([^?&=]+)=([^?&=]+)/g;
  let obj = {};
  url.replace(reg, function () {
    console.log(arguments)
    obj[arguments[1]] = arguments[2];
  });
  return obj
}

const url = 'http://test?a=1&b=2'
console.log(getUrlParams(url))