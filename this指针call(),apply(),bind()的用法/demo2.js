console.log(this); //{}
this.num = 10;
console.log(this.num); //10
console.log(global.num); //undefined

console.log(module.exports); //{num: 10}

function fun() {
  this.num1 = 10;
}
fun();
console.log(global.num1); //10
const f = new fun();
console.log(f); //fun {num1: 10}
