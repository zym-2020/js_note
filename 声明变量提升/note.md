**js引擎工作过程：**
- 编译过程会找声明，在发现声明的时候会在作用域中开辟相应的内存空间
- js引擎在执行的时候，通过询问作用域来查找有无该变量或者函数，然后执行相关赋值或者函数执行等操作。


**函数优先**
在编译过程中，如果var和function声明的变量为同一个，则function声明的优先级高于var声明的。

**总结**
- var声明的变量只提升声明，赋值操作留在原地
- 函数声明提升整个函数体，函数表达式的提升行为和变量一致。
- 同作用域中，如果函数声明和 var 声明同名，只提升函数声明，忽略 var声明。
- let 和 const 有暂时性死区，必须先声明后使用。



**index.js检验题**