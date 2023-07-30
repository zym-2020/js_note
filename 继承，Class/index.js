// ji的几种集成实现

/**
 * 1.通过原型链继承
 * 缺点：
 * 原型中包含的引用值会在所有实例之间共享，修改一个实例，另一个实例会跟着修改，造成数据混乱
 * 子类实例化时，无法给父类构造函数传参
 */
function Father1() {
  this.color = ["blue", "red"];
}

function Child1() {}
Child1.prototype = new Father1();
const c1 = new Child1();
c1.color.push("black");
console.log(c1.color);
const c11 = new Child1();
console.log(c11.color);

/**
 * 2.借用构造函数继承，解决了不能向超类型传递参数的缺点
 * 缺点：
 * 必须在构造函数中定义方法，因此函数不能复用
 * 子类不能访问父类原型上定义的方法
 */

function Father2(name) {
  this.name = name;
}

function Child2(name, age) {
  Father2.call(this, name);
  this.age = age;
}
const c2 = new Child2("张三", 18);
console.log(c2.name, c2.age);

/**
 * 3.组合式继承，将原型链和借用构造函数组合起来使用，通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承
 * 缺点：
 * 组合式继承存在效率问题，父类构造函数会被调用两次
 */
function Father3(name) {
  this.name = name;
  this.colors = ["red", "blue"];
}
Father3.prototype.sayName = function () {
  console.log(this.name);
};

function Child3(name, age) {
  Father3.call(this, name); //第二次调用Father
  this.age = age;
}
Child3.prototype = new Father3(); //第一次调用Father
Child3.prototype.constructor = Child3;

const c3 = new Child3("张三", 18);
c3.colors.push("black");
console.log(c3.colors);
const c33 = new Child3("李四", 24);
console.log(c33.colors);
c33.sayName();

/**
 * 4.原型式继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同
 */
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
const F = {
  colors: ["red", "blue"],
};
const c4 = object(F); //等价Object.create(F)
c4.colors.push("black");
console.log(c4.colors);
const c44 = object(F);
c44.colors.push("green");
console.log(c44.colors);

/**
 * 5.寄生式继承
 * 缺点
 * 给对象添加函数会导致函数难以重用，与构造函数模式类似。
 */
function Father5(name) {
  this.name = name;
}
Father5.prototype.sayName = function () {
  console.log(this.name);
};

function Child5(name) {
  Father5.call(this, name);
}

function temp() {} //中间媒介，寄生的由来
temp.prototype = Father5.prototype;
Child5.prototype = new temp();
const c5 = new Child5("张三");
c5.sayName();

/**
 * 寄生组合式继承
 */

function inheritPrototype(subType, superType) {
  let prototype = Object(superType.prototype); // 创建对象
  prototype.constructor = subType; // 增强对象
  subType.prototype = prototype; // 赋值对象
}

function Father6(name) {
  this.name = name;
}
Father6.prototype.sayName = function () {
  console.log(this.name);
};
function Child6(name) {
  Father6.call(this, name);
}
inheritPrototype(Child6, Father6);
const c6 = new Child6("李四");
c6.sayName();
