const arr = ["张三", 1];
console.log(arr.toString()); //打印 张三,1
console.log(Object.prototype.toString.call(arr)); //打印[object Array]



const arr1 = [1, 2];
console.log(arr1.toString === Object.prototype.toString); // false, 所以两者不同，实际上数组上重写了 toString 方法
const o = { o: 1 };
console.log(o.toString === Object.prototype.toString); // true, 所以对象默认不需要如此调用。但如果将对象的方法改写就不一定了
o.toString = function changedToString() {
  return "haha";
};
console.log(o.toString()); // 'haha'
console.log(Object.prototype.toString.call(o)); // '[object Object]'. 发现 Object.prototype.toString 也是可以被改写的...
console.log(o.toString === Object.prototype.toString); //false
