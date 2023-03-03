function MyFile(name, age) {
  this.name = name;
  this.age = age;
}

MyFile.prototype.getName = () => {
  return this.name;
};

const myFile = new MyFile("张三", 18);
console.log(myFile.constructor);
console.log(MyFile.constructor === Function);                       //true
console.log(MyFile.prototype.constructor);
console.log(MyFile.prototype.constructor === myFile.constructor);   //true

/**
 * 解释：
 * myFile实例没有constructor属性，所以他会去他的__proto__所指向的对象（即构造函数MyFile的prototype所指向的原型对象）中找constructor，
 * 即myFile.constructor == myFile.__proto__.constructor == MyFile.prototype.constructor == MyFile
 * 
 * MyFile.constructor === Function 是因为构造函数MyFile是Function的一个实例，所以
 * MyFile.constructor === MyFile.__proto__.constructor === Fcuntion.prototype.constructor === Function
 */
