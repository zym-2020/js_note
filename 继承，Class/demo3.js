class Super {}
class Sup extends Super {}
console.log(Sup.__proto__ === Super); //true

function Super1() {}
function Sup1() {}

Sup1.prototype = new Super1();
Sup1.prototype.constructor = Sup1;
console.log(Sup1.__proto__ === Function.prototype); //true
