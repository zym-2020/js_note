const queue = [];
const observe = (callback) => queue.push(callback);
const observable = (obj) =>
  new Proxy(obj, {
    set: (target, key, value) => {
      Reflect.set(target, key, value);
      queue.forEach((item) => {
        item();
      });
    },
  });

const person = observable({
  name: "张三",
  age: 20,
});
function print() {
  console.log(`${person.name}, ${person.age}`);
}
observe(print);
person.name = "李四";
