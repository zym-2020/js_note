# ES5的继承
ES5通过原型链的形式实现继承，见demo1


# ES6的继承class
- 类中constructor内定义的方法和属性是实例对象自己的，而constructor外定义的方法和属性则是所有实例对象可以共享的
- 静态方法不需要通过实例对象，可以直接通过类来调用的方法，其中的 this 指向类本身，静态方法可以被子类继承
- 取值函数（getter）和存值函数（setter）
- 一个类必须有 constructor 方法，如果没有显式定义，一个空的 constructor 方法会被默认添加。
- 一个类只能拥有一个名为 “constructor” 的特殊方法，如果类包含多个 constructor 的方法，则将抛出 一个 SyntaxError 
- super关键字用于访问和调用 父类上的函数，可以调用父类的构造函数 也可以调用父类的普通函数


**函数声明和类声明的区别**
函数声明会提升，类声明不会，首先要先声明类，然后再访问

**ES5继承和ES6继承的区别**
- ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上（Parent.call(this)）
- ES6的继承有所不同，实质上是先创建父类的实例对象this，然后再用子类的构造函数修改this。因为子类没有自己的this对象，所以必须先调用父类的super()方法，否则新建实例报错
- ES6 class子类可以直接通过__proto__寻址到父类，而ES5的__proto__指向Function.prototype（见demo3）