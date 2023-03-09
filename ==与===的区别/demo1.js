let s1 = String("test");
let s2 = new String("test");

console.log(s1 == s2);  //true
console.log(s1 === s2); //false

console.log(typeof s1)  //string
console.log(typeof s2)  //object

