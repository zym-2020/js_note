const b = 10;
(function b() {
  b = 20;           //严格模式下会报错Uncaught TypeError: Assignment to constant variable
  console.log(b);
})();


/**
 * 打印 f b() {}
 * 内部作用域，会先去查找是有已有变量b的声明，有就直接赋值20，确实有了呀。发现了具名函数 function b(){}，拿此b做赋值
 * IIFE的函数无法进行赋值（内部机制，类似const定义的常量），所以无效，严格模式下会报错。
 */
