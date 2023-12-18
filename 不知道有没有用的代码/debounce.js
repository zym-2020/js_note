const debounce = (func, wait, ...param) => {
  let time;
  return function () {
    const context = this;
    const arg = [...param];
    if (time) clearTimeout(time);
    time = setTimeout(() => {
      func.apply(context, arg);
    }, wait);
  };
};



const count = (a) => {
  console.log(a);
};

const func = debounce(count, 1000, "123");
func();
