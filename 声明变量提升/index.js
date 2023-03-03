var a = new Object();
a.param = 123;

function foo() {
  get = function () {
    console.log(1);
  };
  return this;
}

foo.get = function () {
  console.log(2);
};

foo.prototype.get = function () {
  console.log(3);
};

var get = function () {
  console.log(4);
};

function get() {
  console.log(5);
}

foo.get();              //2
get();                  //4
// foo().get();            //报错
get();                  //4
new foo.get();          //2
new foo().get();        //3
new new foo().get();    //3
