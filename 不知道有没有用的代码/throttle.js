const throttle = (func, wait, ...arg) => {
  let date = new Date();
  return function () {
    const now = new Date();
    if (now - date > wait) {
      func.apply(this, arg);
      date = now;
    }
  };
};

const count = (a) => {
  console.log(a + 1);
};

const test = throttle(count, 1000, 2);
setTimeout(() => {
  test();
  test();
}, 2000);
