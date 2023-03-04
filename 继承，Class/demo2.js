// 类的demo
class Father {
  constructor(name) {
    this.name = name;
  }
  get operateName() {
    return this.name;
  }

  set operateName(name) {
    this.name = name;
  }

  static printName() {
    console.log("我的名字是：1");
  }
}

class Child extends Father {
  static six = "男";
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  static printAge() {
    console.log(this.six, "我的年龄是：2");
  }

  getInfo() {
    super.operateName = "张三";
    console.log("我的名字是：" + this.name + "我的年龄是：" + this.age);
  }

  //   get operateAge() {
  //     return this.age;
  //   }

  //   set operateAge(age) {
  //     this.age = age;
  //   }
}

const f = new Father("张三");
const c = new Child("李四", 18);
console.log(f.operateName);
f.operateName = "王二";
console.log(f.operateName);
Father.printName();
c.age = 100;
c.getInfo();
Child.printAge();
