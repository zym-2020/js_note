// Function.prototype.bind = function () {
//   const _this = this;
//   const context = arguments[0];
//   const arg = [].splice.call(arguments, 1);         //arguments对象不是数组，而是一个类似数组的对象。因此无法直接使用数组的方法
//   return function () {
//     const param = [].concat.apply(arg, arguments);
//     _this.apply(context, param);
//   };
// };

Function.prototype.bind = function (...arg) {
  /**
   * 更优雅的写法
   */
  const _this = this;
  const context = arg[0];
  arg = arg.splice(1);
  return function () {
    _this.apply(context, [...arg, ...arguments]);
  };
};

const test = (...arg) => {
  //rest 参数就不存在这个问题，它就是一个真正的数组
  console.log(arg);
};

test.bind(null, "张三", "李四")("王二");
