//斐波拉契数列
//传统递归写法
const fibonacci = (n) => {
  if (n === 0 || n === 1) return n;
  else return fibonacci(n - 2) + fibonacci(n - 1);
};

//尾递归优化
const tailFibonacci = (n, n1, n2) => {
  if (n === 0) return n1;
  else return tailFibonacci(n - 1, n2, n1 + n2);
};

console.log(fibonacci(5), tailFibonacci(5, 0, 1));

//n的阶乘
//传统写法
const factorial = (n) => {
  if (n === 1) return 1;
  else return factorial(n - 1) + n;
};

const tailFactorial = (n, sum) => {
  if (n === 0) return sum;
  else return tailFactorial(n - 1, sum + n);
};

console.log(factorial(5), tailFactorial(5, 0));
