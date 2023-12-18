Function.prototype.bind = function () {
  const _this = this;
  const context = arguments[0];
  let arg = [].splice.call(arguments, 1);
  return (...param) => {
    arg = [].concat.apply(arg, param);
    _this.apply(context, arg);
  };
};

const count = (a) => {
  console.log(a + 1);
};

count.bind(this)(3)

function A(a) {
  this.a = a
}
const a = new A(3)
console.log(a.a)