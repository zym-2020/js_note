const fn = (name) => {
  console.log(name);
};

function f1(f) {
  f.call(this, arguments[1]);
}

f1(fn, '张三')
