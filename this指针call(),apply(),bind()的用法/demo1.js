const obj = {
  name: "张三",
  objAge: this.age,
  myFun: function () {
    console.log(this.name, this.age);
  },
  myFun1: function (from, to) {
    console.log(this.name + "来自" + from + "去" + to);
  },
};

const db = {
  name: "亚索",
  age: 3,
};

obj.myFun();
obj.myFun.call(obj);
obj.myFun.call(db);

obj.myFun1.call(db, "长沙", "南京");
obj.myFun1.call(db, ["长沙", "南京"]);
// obj.myFun1.apply(db, "长沙", "南京");            //报错
obj.myFun1.apply(db, ["长沙", "南京"]);
obj.myFun1.bind(db, "长沙", "南京")();
obj.myFun1.bind(db, ["长沙", "南京"])();
