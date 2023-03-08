console.log([] instanceof Array); //true
console.log([] instanceof Object); //true

const Fn = function () {};
const f = new Fn();
console.log(f instanceof Fn); //true

class Father {}
class Child extends Father {}

const father = new Father();
const child = new Child();
console.log(child instanceof Child); //true
console.log(child instanceof Father); //true
console.log(father instanceof Father); //true
console.log(father instanceof Child); //false
