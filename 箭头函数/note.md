# 箭头函数

**箭头函数的特点**
- 箭头函数不绑定this，会捕获上下文中的this，作为自己的this
- 箭头函数是匿名函数，不能作为构造函数，不可以使用new命令
- 箭头函数不绑定arguments，取而代之用rest参数解决，同时没有super和new.target
- 使用call,apply,bind并不会改变箭头函数中的this指向。
- 箭头函数没有原型对象prototype这个属性
- 不能使用yield关键字，不能用作Generator函数