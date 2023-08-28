# Object.prototype.toString.call()
每一个继承 Object 的对象都有 toString 方法，如果 toString 方法没有重写的话，会返回 [Object type]，其中 type 为对象的类型。但当除了 Object 类型的对象外，其他类型直接使用 toString 方法时，会直接返回都是内容的字符串

```
Object.prototype.toString.call('An') // "[object String]"
Object.prototype.toString.call(1) // "[object Number]"
Object.prototype.toString.call(Symbol(1)) // "[object Symbol]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(function(){}) // "[object Function]"
Object.prototype.toString.call({name: 'An'}) // "[object Object]"
```

object.prototype.toString.call() 常用于判断浏览器内置对象时
这里有个有意思的点，当数组直接调用toString()与调用Object.prototype.toString.call()时不一样，并不能理解为通过call改变了this的指向，而是改变了调用的方法，因为数组也继承Object对象，并有重写toString方法，见demo1


# instanceof
**instanceof**的内部机制是通过判断对象的原型链中是不是能找到类型的**prototype**
使用**instanceof**判断一个对象是否为数组，**instanceof**会判断这个对象的原型链上是否会找到对应的 Array 的原型，找到返回 true，否则返回 false。

见demo2


# Array.isArray()
- 功能：用来判断对象是否为数组
- instanceof 与 isArray，当检测Array实例时，Array.isArray 优于 instanceof ，因为 Array.isArray 可以检测出 iframes数组