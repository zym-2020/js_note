# 网络请求fetch与xhr

## XMLHttpRequest
XHR 和 fetch API 都是浏览器给上层使用者暴露出来的 API，都是建立在http协议上的，给使用者提供了部分系统操作 http 包的能力。

XHR在1999年加入到 IE5 中，之后所有主流的浏览器都引入了该特性，XHR对象用于与服务器交互，可以用于获取任何类型的数据,甚至支持HTTP以外的协议（包括 file:// 和 FTP）。

```
//Get请求
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';
xhr.onload = function() {
  console.log(xhr.response);
}
xhr.onerror = function() {
  console.log('error');
}
xhr.send();


//Post请求
const convertToURL = function(obj) {
    let result = '';
    if(obj!== null && typeof obj === 'object') {
        for(var key in obj) {
            if(obj.hasOwnProperty(key)) {
                let tmp = `&${key}=${obj[key]}`;
                result += tmp;
            }
        }
        result = result.substring(1);
    }
    return result;
}

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = (res) => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('success response', xhr.response);
    }
};
xhr.open('post', '/listByPage');
const params = {
    pageNum: 1,
    pageSize: 10
};
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.responseType = 'json';
xhr.send(convertToURL(params));

// 当设置为请求头的Content-Type设为application/json时，不能直接发送json对象，需要把json对象序列化才行。
// xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
// xhr.send(JSON.stringify(params));
```

**xrh的属性**
XHR.readyState == 状态（0，1，2，3，4），而且状态也是不可逆的：

- 0：请求未初始化，还没有调用 open()。
- 1：请求已经建立，但是还没有发送，还没有调用 send()。
- 2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。
- 3：请求在处理中；通常响应中已有部分数据可用了，没有全部完成。
- 4：响应已完成；您可以获取并使用服务器的响应了。

XHR.onreadystatechange 用来监听 XHR.readyState 变化
XHR.response 相应实体，类型取决于responseType
XHR.responseType 定义响应类型的枚举值，'arraybuffer'、'blob'、'document'、'json'、'text'、''(默认)。
XHR.status 请求的响应状态
XHR.timeout 设置请求最大请求事件，超出该时间请求自动终止。
XHR.ontimeout 设置请求超时的回调。
XHR.upload 只读，代表上传进度。

**xrh的方法**
XHR.open() 初始化一个请求。
XHR.abort() 终止请求。
XHR.send() 发送请求。
XHR.setRequestHeader() 设置HTTP请求头。
XHR.getAllResponseHeaders() 获取所有CRLF 分隔的响应头，如没有收到响应则返回null。
XHR.getResponseHeader(key) 获取指定响应头的字符串，如果不存在该响应头或者响应未收到，则返回null。


**xrh的事件**
XHR.error 当请求被停止时触发，例如程序调用XHR.abort()时。也可以使用XHR.onabort属性
XHR.error 当请求遇到错误时触发，也可以使用XHR.onerror属性
XHR.load 当请求成功完成时触发，也可以使用XHR.onload属性
XHR.loadstart 当接收到响应数据时触发，也可以使用XHR.onloadstart属性
XHR.loadend 当结束时触发无论请求是成功(load)还是失败(abort或error)，也可以使用XHR.onloadend属性
XHR.progress 当请求接收到更多数据时，周期性地触发，也可以使用XHR.onprogress属性
XHR.timeout 在预设时间内没有接收到响应时触发。也可以使用 ontimeout 属性


**xrh的不足**
从使用方法上看，http的request和response以及事件监听都在同一个xhr对象上，代码组织缺少语义化且可能造成回调地狱，手写一个xhr还是比较麻烦的。于是出现了jQuery.ajax() 和 axios 都是基于XHR使用Promise的方法设计的API，来避免回调的写法。


## Fetch
fetch API 使用Promise语法结构。返回一个Promise，可以使用async/await，代码比原始的XHR清爽。

```
//Get请求
fetch(url)
.then( response => {
    console.log(response.json());
})
.then( json => console.log(json) )
.catch( error => console.error('error:', error) );

//Post请求
const url = '/listByPage';
const options = {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
        pageNum: 1,
        pageSize: 10
    }),
};

fetch(url, options).then((response) => {
    console.log(response.status);
});

```

**fetch的input参数**

它是一个 Request 对象或者是一个字符串，可以传一个 Request 实例
**fetch的init参数**
第二个参数可以接受一个对象。

- method 请求的方法，如GET POST等
- headers 请求头信息
- body 请求的body信息，可以是Blob、BufferSource 、FormData、URLSearchParams或者 USVString 对象
- mode 请求的模式，如 cors、no-cors 或者same-origin。
- credentials: 请求的 credentials，如 omit、``same-origin 或者 include。为了在当前域名内自动发送 cookie ，必须提供这个选项。
- cache:  请求的 cache 模式: default、 no-store、 reload 、 no-cache 、 force-cache 或者 only-if-cached 。
- redirect: 可用的 redirect 模式: follow (自动重定向), error (如果产生重定向将自动终止并且抛出一个错误）, 或者 manual (手动处理重定向)。
- referrer: 一个 USVString 可以是 no-referrer、``client或一个 URL。默认是 client。
- referrerPolicy: 指定了HTTP头部referer字段的值。可能为以下值之一： no-referrer、 no-referrer-when-downgrade、 origin、 origin-when-cross-origin、 unsafe-url 。
- integrity: 包括请求的  subresource integrity值。

**fetch的不足**
- 默认不会发送cookies，默认无Cookie，需要设置init参数 credentials: 'same-origin'
- 请求错误不会reject，HTTP请求错误时，fetch返回的Promise不会被标记为reject，也不会执行catch。需要在resolve中判断response.ok是否为true。
- 没有timeout，fetch没有timeout配置，可以使用Promise.race()来设置超时。
- 没有abort，旧版的fetch一旦发起请求无法中指，现在支持 AbortController API 的浏览器可以通过调用abortController.abort()终止，Promise 会被标记为reject状态，同样可以实现 timeout 的效果。
- 没有progress，不能显示文件上传和大型表单提交的进度


