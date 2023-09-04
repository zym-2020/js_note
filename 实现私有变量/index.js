//特权方法实现
class MyObjectA {
  constructor() {
    let value = "123";

    this.getValue = () => {
      return value;
    };

    this.setValue = (val) => {
      value = val;
    };
  }
}

const obj1 = new MyObjectA();
const obj2 = new MyObjectA();
obj1.setValue("456");
console.log(obj1.getValue(), obj2.getValue());

//静态私有变量
const MyObjectB = (function () {
  let value = "123";
  const map = new WeakMap(); //实例回收后value内存并不会释放，所以用weakmap来释放内存
  class MyObjectB {
    constructor() {
      map.set(this, value);
    }

    getValue() {
      return value;
    }

    setValue(val) {
      value = val;
    }
  }
  return MyObjectB;
})();

const objB1 = new MyObjectB();
const objB2 = new MyObjectB();
objB1.setValue("456");
console.log(objB1.getValue(), objB2.getValue()); //456 456

//Symbol实现实例私有属性
const MyObjectC = (function () {
  const map = new WeakMap(); //同理，实例回收后value内存并不会释放，所以用weakmap来释放内存
  const _value = Symbol("value");
  class MyObjectC {
    constructor() {
      this[_value] = "123";
      map.set(this, _value);
    }

    getValue() {
      return this[_value];
    }

    setValue(val) {
      this[_value] = val;
    }
  }
  return MyObjectC;
})();

const objC1 = new MyObjectC();
const objC2 = new MyObjectC();
objC1.setValue("456");
console.log(objC1.getValue(), objC2.getValue()); //456 123

//模块模式
const singleton = function () {
  let value = "123";

  return {
    // 其他公有属性
    getValue() {
      return value;
    },

    setValue(val) {
      value = val;
    },
  };
};
//这种方式适合不需要创建类型，而是专注于对象的场景
const o1 = singleton(),
  o2 = singleton();
o1.setValue("456");
console.log(o1.getValue(), o2.getValue()); //456 123

//ES 提案：私有类字段
class MyObjectD {
  #value = 123;
  getValue() {
    return this.#value;
  }

  setValue(val) {
    this.#value = val;
  }
}

const objD1 = new MyObjectD();
const objD2 = new MyObjectD();
objD1.setValue("456");
console.log(objD1.getValue(), objD2.getValue()); //456 123