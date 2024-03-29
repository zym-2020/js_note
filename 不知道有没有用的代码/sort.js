/**
 * sort 函数，可以接收一个函数，返回值是比较两个数的相对顺序的值
 * 默认没有函数 是按照 UTF-16 排序的，对于字母数字 你可以利用 ASCII 进行记忆
 */

const arr = [3, 15, 8, 29, 102, 22];
console.log(arr.sort()); //[102, 15, 22, 29, 3, 8]

//带函数的比较
console.log(
  arr.sort((a, b) => {
    return a - b;
  })
);

/**
 * 返回值大于0 即a-b > 0 ， a 和 b 交换位置
 * 返回值小于0 即a-b < 0 ， a 和 b 位置不变
 * 返回值等于0 即a-b = 0 ， a 和 b 位置不变
 */

