/**
 * 扩展运算符的运用
 */

/**
 * 1.扩展运算符可以对可迭代对象实现展开
 */

/**
 * 2.赋值数组
 */
const a1 = [1, 2, 3];
const a2 = [...a1];
a2[0] = 3;
console.log(a1, a2);

//其他实现
const a3 = a1.concat();
a3[0] = 3;
console.log(a1, a3);

const arr1 = [{ key: "a" }];
const arr2 = [...arr1];
arr2[0].key = "b";
console.log(arr1, arr2);

//这两种实现都是拷贝实现，但是是浅拷贝！！！！
