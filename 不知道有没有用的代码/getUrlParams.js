/**
 * 解析url里的参数
 * 就是提出 url 里的参数并转成对象
 */

function getUrlParams(url) {
  let reg = /([^?&=]+)=([^?&=]+)/g;
  let obj = {};
  let a = url.replace(reg, function () {
    console.log(arguments)
    obj[arguments[1]] = arguments[2];
  });
  console.log(a)
  return obj
}

const url = 'http://test?a5=1&b=2'
console.log(getUrlParams(url))


/**
 * replace()函数
 * 1. 当正则没有分组的时候，传进去的第一个实参是正则捕获到的内容，第二个参数是捕获到的内容在原字符串中的索引位置，第三个参数是原字符串（输入字符串）
 * 2. 当正则有分组的时候，第一个参数是总正则查找到的内容，后面依次是各个子正则查找到的内容。传完查找到的内容之后，再把总正则查找到的内容在原字符串中的索引传进（就是arguments[0]在str中的索引位置）。
 * 最后把输入字符串（就是原字符串）传进去
 * 3. 函数返回值是replace的替换内容
 */