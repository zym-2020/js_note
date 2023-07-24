const proxy = new Proxy(
  {},
  {
    get: function (target, property) {
      console.log(property);
      return 35;
    },
  }
);

console.log(proxy.time);
console.log(proxy.name);

const handle = {
  get: function (target, name) {
    if (name === "prototype") {
      return Object.prototype;
    }
    return "Hello, " + name;
  },

  apply: function (target, thisBinding, args) {
    return args[0];
  },

  construct: function (target, args) {
    return { value: args[1] };
  },
};

const proxy1 = new Proxy(function (x, y) {
  return x + y;
}, handle);
console.log(proxy1(1, 2));                              //1
console.log(new proxy1(1, 2));                          //{value: 2}
console.log(proxy1.prototype === Object.prototype);     //true
console.log(proxy1.foo);                                //Hello，foo
