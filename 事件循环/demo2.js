const fun = () => {
  return new Promise((res) => {
    console.log(1);
    let a = 2;
    res(a);
  }).then((e) => {
    console.log(e);
    console.log(3);
  });
};

console.log(4);
fun();
console.log(5);

// ================等价于下面=================
// const fun1 = async () => {
//   console.log(1);
//   let a = await 2;
//   console.log(a);
//   console.log(3);
// };
// console.log(4);
// fun1();
// console.log(5);
