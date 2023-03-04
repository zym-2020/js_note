function Person() {}
Person.prototype.getName = () => {
  return "张三";
};

function Child() {
  this.getName1 = () => {
    return "李四";
  };
}
Child.prototype = Object.create(Person.prototype);
Child.prototype.constructor = Child;

const per = new Person();
console.log(per.getName());

const child = new Child();
console.log(child.getName1());
console.log(child.getName());
