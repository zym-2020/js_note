# this
>它指向什么完全取决于函数在哪里调用，在 **Es5** 中 **this** 永远指向调用它的那个对象，而在 **Es6** 的箭头函数中没有**this** 绑定，**this** 指向箭头函数定义时所在的作用域中的 **this**

## 判断this
- 全局作用域、自执行函数、定时器传进的非箭头函数的this都指向**window**
- 严格模式下全局作用域中的this指向**undefined**
- 构造函数中的this指向当前的实例
- 事件绑定函数中的this指向当前被绑定的元素
- 箭头函数中this指向定义箭头函数的上级作用域中的this  


  
## 改变this指向
- 使用call，apply，bind，call和apply改变this指向时，函数会立即执行，bind不会，因为bind返回的是一个函数
- 在**非严格模式下**，指定为null和undefined的this值会自动指向全局对象（浏览器中就是window对象）
- 值为原始值（数字，字符串，布尔值）的this会指向该原始值的自动包装对象
- call和bind的参数是直接放进去的，第二个第三个第n参数用逗号分隔
- apply所以参数必须放在一个数组中（间demo1）


## 注意区别浏览器中的this对象和nodejs中this对象
- nodejs中存在this和global对象，全局中的this默认是一个空对象，并和global没有任何联系
- 在函数中this指向的是global对象，在函数中通过this定义的变量就是相当于给global添加了一个属性
- 全局中的this指向的是module.exports
- 例子见demo2